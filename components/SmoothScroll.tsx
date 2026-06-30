"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth-scroll spine. Gives the whole story momentum + buttery easing,
 * routes anchor links through Lenis, and publishes scroll velocity as the CSS
 * var `--scroll-vel` (-1..1) for velocity-reactive flourishes. Disabled under
 * prefers-reduced-motion (native scroll, untouched).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const root = document.documentElement;
    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      const v = Math.max(-1, Math.min(1, velocity / 45));
      root.style.setProperty("--scroll-vel", v.toFixed(4));
    });

    // route in-page anchor links through Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      root.style.removeProperty("--scroll-vel");
    };
  }, []);

  return null;
}
