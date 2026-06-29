"use client";

import { useEffect } from "react";

/**
 * Brio scroll engine — a faithful port of the prototype's `class Component`
 * scroll/animation logic. A single scroll listener reads window.scrollY and
 * writes transforms/opacity/width/strokeDashoffset/textContent imperatively.
 * Reveals rest at opacity:1 (handled in CSS); this only drives the scrubbed
 * sequences: progress bar, statement scan, the pinned Forge, the credential
 * fly-in, and the closing word — plus count-ups and pointer flourishes.
 */
export default function ScrollEngine() {
  useEffect(() => {
    const root = document.getElementById("lp-root");
    if (!root) return;
    const q = (s: string) => root.querySelector(s) as HTMLElement | null;
    const reduce =
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- element cache ----
    const prog = q("#prog");
    const nav = q("nav");
    const credCard = q('[data-cred="card"]');
    const closeWord = q('[data-close="word"]');
    const scanSec = q(".scanwrap");
    const scanFill = q(".scanfill");
    const scanLine = q(".scanline");
    const forgePin = q(".forgepin");

    const F = forgePin
      ? {
          sec: q("#forge"),
          haloV: q('[data-forge="haloV"]'),
          haloL: q('[data-forge="haloL"]'),
          talk: q('[data-forge="talk"]'),
          bars: q('[data-forge="bars"]'),
          chan: q('[data-forge="chan"]'),
          rows: q('[data-forge="rows"]'),
          scan: q('[data-forge="scan"]'),
          score: q('[data-forge="score"]'),
          arc: q('[data-forge="arc"]'),
          num: q('[data-forge="num"]'),
          orb: q('[data-forge="orb"]'),
          cred: q('[data-forge="cred"]'),
          credcard: q('[data-forge="credcard"]'),
          sweep: q('[data-forge="sweep"]'),
          stamp: q('[data-forge="stamp"]'),
          caption: q('[data-forge="caption"]'),
          eyebrow: q('[data-forge="eyebrow"]'),
          steps: Array.from(
            root.querySelectorAll('[data-forge="step"]')
          ) as HTMLElement[],
          stepfill: q('[data-forge="stepfill"]'),
          fills: Array.from(
            root.querySelectorAll("[data-forge-fill]")
          ) as HTMLElement[],
          nums: Array.from(
            root.querySelectorAll('[data-forge="chan"] [data-forge-num]')
          ) as HTMLElement[],
          caps: [
            "You speak for ten minutes.",
            "Brio measures five channels of real signal.",
            "It resolves into one readiness score.",
            "You carry proof, not a promise.",
          ],
          eyes: [
            "Step one · speak",
            "Step two · measure",
            "Step three · resolve",
            "Step four · prove",
          ],
          circ: 2 * Math.PI * 158,
        }
      : null;
    let fcap = -1;

    // ---- geometry ----
    const off = (el: HTMLElement | null) => {
      let y = 0;
      let cur: HTMLElement | null = el;
      while (cur) {
        y += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }
      return y;
    };
    let vh = window.innerHeight;
    let lastY = window.scrollY || 0;
    let docSpan = 1;
    let credTop = 0;
    let closeTop = 0;
    let scanTop = 0;
    let forgeTop = 0;
    let forgeSpan = 1;
    let rowsH = 280;

    const measureGeom = () => {
      vh = window.innerHeight;
      docSpan = Math.max(
        1,
        document.scrollingElement!.scrollHeight - vh
      );
      if (credCard) credTop = off(credCard);
      if (closeWord) closeTop = off(closeWord);
      if (scanSec) scanTop = off(scanSec);
      if (forgePin && F && F.sec) {
        forgeTop = off(F.sec);
        forgeSpan = Math.max(1, F.sec.offsetHeight - vh);
        rowsH = F.rows ? F.rows.offsetHeight : 280;
      }
    };

    const buildBars = () => {
      const bars = F && F.bars;
      if (!bars || bars.dataset.built) return;
      const n = Math.max(28, Math.min(52, Math.round(window.innerWidth / 22)));
      let h2 = "";
      for (let i = 0; i < n; i++) {
        const c = 1 - Math.abs(i - (n - 1) / 2) / ((n - 1) / 2);
        const h = (20 + Math.pow(c, 1.4) * 78 + (i % 3) * 5).toFixed(0);
        const dly = (i * 47) % 1100;
        const col = i % 5 === 4 ? "#c9f24d" : i % 2 ? "#9b7bf8" : "#7c3aed";
        h2 +=
          '<span style="width:5px;height:' +
          h +
          "%;border-radius:4px;background:linear-gradient(" +
          col +
          ',#7c3aed);transform-origin:center;animation:eq 1.05s ease-in-out infinite;animation-delay:-' +
          dly +
          'ms;"></span>';
      }
      bars.innerHTML = h2;
      bars.dataset.built = "1";
    };

    const forgeFallback = () => {
      if (!F || !forgePin) return;
      forgePin.style.position = "static";
      forgePin.style.height = "auto";
      forgePin.style.padding = "90px 6vw";
      if (F.sec) F.sec.style.height = "auto";
      [F.talk, F.chan, F.score, F.cred].forEach((el) => {
        if (!el) return;
        el.style.position = "relative";
        el.style.inset = "auto";
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.margin = "46px auto";
      });
      if (F.credcard) F.credcard.style.transform = "none";
      if (F.scan) F.scan.style.opacity = "0";
      if (F.stamp) {
        F.stamp.style.opacity = "1";
        F.stamp.style.transform = "rotate(-15deg) scale(1)";
      }
      F.fills.forEach((f) => {
        f.style.width = +f.dataset.target! + "%";
      });
      F.nums.forEach((n) => {
        n.textContent = n.dataset.target!;
      });
      if (F.num) F.num.textContent = "84";
      if (F.arc) F.arc.style.strokeDashoffset = String(F.circ * (1 - 0.84));
    };

    // ---- count-ups ----
    const count = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-count")!);
      if (isNaN(target)) return;
      const suf = el.getAttribute("data-suffix") || "";
      const pre = el.getAttribute("data-prefix") || "";
      const fmt = (v: number) =>
        pre + Math.round(v).toLocaleString() + suf;
      const dur = 1500;
      const t0 = performance.now();
      const step = (t: number) => {
        let p = Math.min(1, (t - t0) / dur);
        p = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * p);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target);
      };
      requestAnimationFrame(step);
    };

    const counts = Array.from(
      root.querySelectorAll("[data-count]")
    ) as HTMLElement[];
    let io: IntersectionObserver | null = null;
    if (reduce) {
      counts.forEach((e) => {
        e.textContent = e.getAttribute("data-count")!;
      });
    } else {
      try {
        io = new IntersectionObserver(
          (ents) => {
            ents.forEach((en) => {
              if (en.isIntersecting) {
                count(en.target as HTMLElement);
                io!.unobserve(en.target);
              }
            });
          },
          { threshold: 0.5 }
        );
        counts.forEach((e) => io!.observe(e));
      } catch (e) {
        counts.forEach((el) => {
          el.textContent = el.getAttribute("data-count")!;
        });
      }
    }

    // ---- scroll ----
    const cl = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const onScroll = () => {
      const y = window.scrollY || document.scrollingElement!.scrollTop || 0;
      // hide-on-scroll-down, reveal-on-scroll-up header
      if (nav) {
        if (y <= 4) nav.style.transform = "translateY(0)";
        else if (y > lastY + 2 && y > 80) nav.style.transform = "translateY(-100%)";
        else if (y < lastY - 2) nav.style.transform = "translateY(0)";
        lastY = y;
      }
      if (prog) prog.style.transform = "scaleX(" + cl(y / docSpan) + ")";
      if (scanFill) {
        const top = scanTop - y;
        const p = cl((vh * 0.72 - top) / (vh * 0.52));
        scanFill.style.clipPath = "inset(0 " + (100 - 100 * p) + "% 0 0)";
        if (scanLine) {
          scanLine.style.left = p * 100 + "%";
          scanLine.style.opacity = p > 0.002 && p < 0.998 ? "1" : "0";
        }
      }
      if (credCard) {
        const top = credTop - y;
        const e = cl((vh * 0.92 - top) / (vh * 0.55));
        credCard.style.transform =
          "rotateY(" +
          (30 - 36 * e) +
          "deg) rotateX(" +
          (9 - 7 * e) +
          "deg) scale(" +
          (0.82 + 0.18 * e) +
          ") translateX(" +
          70 * (1 - e) +
          "px)";
      }
      if (closeWord) {
        const top = closeTop - y;
        const e = cl((vh - top) / (vh * 0.72));
        closeWord.style.transform =
          "translateY(" +
          70 * (1 - e) +
          "px) scale(" +
          (0.9 + 0.15 * e) +
          ")";
      }
      if (forgePin && F) {
        const p = cl((y - forgeTop) / forgeSpan);
        const seg = (a: number, b: number) => cl((p - a) / (b - a));
        const eo = (t: number) => 1 - Math.pow(1 - t, 3);
        if (F.haloV) {
          F.haloV.style.transform =
            "translate(-50%,-50%) scale(" + (0.82 + 0.5 * p) + ")";
          F.haloV.style.opacity = String(0.95 - 0.4 * p);
        }
        if (F.haloL) {
          F.haloL.style.opacity = String(seg(0.5, 0.82));
          F.haloL.style.transform =
            "translate(-50%,-50%) scale(" + (0.7 + 0.45 * p) + ")";
        }
        if (F.talk) {
          const inn = eo(seg(0, 0.07));
          const out = seg(0.18, 0.245);
          F.talk.style.opacity = String((0.15 + 0.85 * inn) * (1 - out));
          F.talk.style.transform =
            "scale(" + (0.92 + 0.08 * inn - 0.36 * out) + ")";
        }
        if (F.chan) {
          const inn = eo(seg(0.21, 0.3));
          const out = seg(0.48, 0.545);
          F.chan.style.opacity = String(inn * (1 - out));
          F.chan.style.transform =
            "translateY(" +
            (46 * (1 - inn) - 30 * out) +
            "px) scale(" +
            (1 - 0.3 * out) +
            ")";
          const fp = eo(seg(0.27, 0.46));
          F.fills.forEach((f) => {
            f.style.width = +f.dataset.target! * fp + "%";
          });
          F.nums.forEach((n) => {
            n.textContent = String(Math.round(+n.dataset.target! * fp));
          });
          if (F.scan) {
            const sv = seg(0.27, 0.46);
            F.scan.style.transform = "translateY(" + sv * (rowsH || 280) + "px)";
            F.scan.style.opacity = sv > 0.02 && sv < 0.99 ? "1" : "0";
          }
        }
        if (F.score) {
          const inn = eo(seg(0.49, 0.58));
          const out = seg(0.73, 0.795);
          F.score.style.opacity = String(inn * (1 - out));
          F.score.style.transform =
            "scale(" + (0.72 + 0.28 * inn - 0.12 * out) + ")";
          const gp = eo(seg(0.535, 0.72));
          if (F.num) F.num.textContent = String(Math.round(84 * gp));
          if (F.arc)
            F.arc.style.strokeDashoffset = String(F.circ * (1 - gp * 0.84));
          if (F.orb) F.orb.style.transform = "rotate(" + gp * 54 + "deg)";
        }
        if (F.cred) {
          const fade = seg(0.755, 0.84);
          const inn = eo(seg(0.775, 0.9));
          F.cred.style.opacity = String(cl(fade));
          if (F.credcard)
            F.credcard.style.transform =
              "rotateY(" +
              (72 - 72 * inn) +
              "deg) rotateX(" +
              (9 - 9 * inn) +
              "deg) scale(" +
              (0.8 + 0.2 * inn) +
              ")";
          if (F.sweep) {
            const sp = seg(0.82, 0.99);
            F.sweep.style.transform = "translateX(" + (-140 + sp * 420) + "%)";
          }
          if (F.stamp) {
            const st = seg(0.89, 0.965);
            F.stamp.style.opacity = String(st);
            F.stamp.style.transform =
              "rotate(" +
              (-15 + 5 * st) +
              "deg) scale(" +
              (0.4 + 0.6 * eo(st)) +
              ")";
          }
        }
        if (F.stepfill) F.stepfill.style.width = p * 100 + "%";
        const idx = p < 0.21 ? 0 : p < 0.49 ? 1 : p < 0.75 ? 2 : 3;
        if (fcap !== idx) {
          fcap = idx;
          if (F.caption) F.caption.textContent = F.caps[idx];
          if (F.eyebrow) F.eyebrow.textContent = F.eyes[idx];
          F.steps.forEach((s, i) => {
            s.style.color =
              i === idx ? "#c9f24d" : i < idx ? "#9b7bf8" : "#6f6790";
          });
        }
      }
    };

    // ---- pointer flourishes ----
    const pointerCleanups: Array<() => void> = [];
    const setupPointer = () => {
      root.querySelectorAll<HTMLElement>(".magnetic").forEach((btn) => {
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          btn.style.transform =
            "translate(" +
            (e.clientX - (r.left + r.width / 2)) * 0.3 +
            "px," +
            (e.clientY - (r.top + r.height / 2)) * 0.45 +
            "px)";
        };
        const leave = () => {
          btn.style.transform = "translate(0,0)";
        };
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        pointerCleanups.push(() => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
        });
      });
      root.querySelectorAll<HTMLElement>(".tilt").forEach((card) => {
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform =
            "perspective(900px) rotateX(" +
            -py * 5 +
            "deg) rotateY(" +
            px * 7 +
            "deg) translateY(-4px)";
          card.style.setProperty("--mx", e.clientX - r.left + "px");
          card.style.setProperty("--my", e.clientY - r.top + "px");
        };
        const leave = () => {
          card.style.transform = "";
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        pointerCleanups.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });
    };

    // ---- init ----
    if (F) buildBars();
    if (reduce) {
      if (scanFill) scanFill.style.clipPath = "inset(0 0 0 0)";
      forgeFallback();
      return () => {
        if (io) io.disconnect();
      };
    }

    measureGeom();
    const onResize = () => {
      measureGeom();
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    setupPointer();
    onScroll();

    // re-measure after fonts/layout settle (mirrors the prototype's retries)
    const t1 = setTimeout(() => {
      measureGeom();
      onScroll();
    }, 160);
    const t2 = setTimeout(() => {
      measureGeom();
      onScroll();
    }, 700);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      pointerCleanups.forEach((c) => c());
      if (io) io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
