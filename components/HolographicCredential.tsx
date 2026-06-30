"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive holographic credential — the "hold the proof" moment.
 * Pointer-reactive 3D tilt with easing, an iridescent foil + glare that shift
 * with the view angle (the trading-card holo technique), and a "mint" entrance
 * when it scrolls in. Idle auto-shimmer when the pointer isn't on it.
 * Pure CSS transforms (no second WebGL canvas) so it stays cheap.
 */
export default function HolographicCredential() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    const reduce =
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let visible = false;
    let start = 0;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting && !visible) {
            visible = true;
            start = performance.now();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(card);

    if (reduce) {
      card.style.opacity = "1";
      return () => io.disconnect();
    }

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let px = 50;
    let py = 50;
    let cpx = 50;
    let cpy = 50;
    let hovering = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      tx = (0.5 - y) * 16;
      ty = (x - 0.5) * 22;
      px = x * 100;
      py = y * 100;
      hovering = true;
    };
    const onLeave = () => {
      hovering = false;
    };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    const loop = (t: number) => {
      const s = t / 1000;
      const e = visible ? Math.min(1, (t - start) / 1050) : 0;
      const ee = 1 - Math.pow(1 - e, 3); // easeOutCubic entrance
      const entryX = (1 - ee) * 26;
      const entryY = -(1 - ee) * 26;
      const entryTY = (1 - ee) * 34;
      const entryS = 0.86 + 0.14 * ee;
      const blur = (1 - ee) * 6;
      const tiltMix = Math.max(0, (ee - 0.5) / 0.5);

      if (!hovering) {
        // gentle idle shimmer
        tx += (Math.sin(s * 0.6) * 4 - tx) * 0.04;
        ty += (Math.cos(s * 0.5) * 6 - ty) * 0.04;
        px += (50 + Math.sin(s * 0.6) * 28 - px) * 0.04;
        py += (50 + Math.cos(s * 0.5) * 20 - py) * 0.04;
      }
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      cpx += (px - cpx) * 0.14;
      cpy += (py - cpy) * 0.14;

      card.style.transform =
        `translateY(${entryTY.toFixed(2)}px) ` +
        `rotateX(${(entryX + cx * tiltMix).toFixed(2)}deg) ` +
        `rotateY(${(entryY + cy * tiltMix).toFixed(2)}deg) ` +
        `scale(${entryS.toFixed(3)})`;
      card.style.opacity = ee.toFixed(3);
      card.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "none";
      card.style.setProperty("--px", cpx.toFixed(2) + "%");
      card.style.setProperty("--py", cpy.toFixed(2) + "%");
      card.style.setProperty("--glare", (hovering ? 0.75 : 0.4).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ perspective: "1100px" }}>
      <div
        ref={cardRef}
        data-cred="card"
        className="cred-card"
        style={{
          position: "relative",
          width: "440px",
          height: "278px",
          borderRadius: "20px",
          boxShadow: "0 50px 90px -30px rgba(0,0,0,.7)",
          background: "linear-gradient(135deg,#fbfaff,#eee7ff 55%,#e7eeff)",
          overflow: "hidden",
          transformOrigin: "center",
          transformStyle: "preserve-3d",
          opacity: "0",
          willChange: "transform",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "repeating-radial-gradient(circle at 18% 120%,transparent 0 7px,rgba(124,58,237,.07) 7px 8px),repeating-radial-gradient(circle at 92% -15%,transparent 0 9px,rgba(14,165,233,.06) 9px 10px),repeating-linear-gradient(115deg,transparent 0 13px,rgba(124,58,237,.035) 13px 14px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.55) 48%,rgba(190,240,255,.4) 52%,transparent 70%)",
            backgroundSize: "220% 100%",
            animation: "flow 4.5s linear infinite",
            mixBlendMode: "screen",
          }}
        ></div>
        {/* iridescent holo foil — shifts with the view angle */}
        <div className="cred-foil" aria-hidden="true"></div>
        <div
          style={{
            position: "relative",
            zIndex: "5",
            padding: "20px 22px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color: "#1a1626",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: "800", fontSize: "16px" }}>brio</div>
              <div
                className="mono"
                style={{
                  fontSize: "8.5px",
                  letterSpacing: ".22em",
                  color: "#8b88a1",
                  marginTop: "1px",
                }}
              >
                VERIFIED CREDENTIAL
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg,#ffd1f5,#c9b8ff,#b8f0ff,#d6ffe0,#ffe9b8,#ffd1f5)",
                animation: "spin 6s linear infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "6px",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7c3aed",
                  fontSize: "18px",
                }}
              >
                ✓
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                className="mono"
                style={{ fontSize: "9px", letterSpacing: ".16em", color: "#8b88a1" }}
              >
                GRADE
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span
                  className="serif"
                  style={{ fontSize: "64px", lineHeight: ".8", color: "#7c3aed" }}
                >
                  A
                </span>
                <span className="serif" style={{ fontSize: "40px", lineHeight: ".8" }}>
                  84
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "3px",
                height: "34px",
              }}
            >
              <span style={{ width: "5px", background: "#7c3aed", borderRadius: "2px", height: "74%", transformOrigin: "bottom", animation: "eq 1.5s ease-in-out infinite" }}></span>
              <span style={{ width: "5px", background: "#0ea5e9", borderRadius: "2px", height: "72%", transformOrigin: "bottom", animation: "eq 1.5s ease-in-out .15s infinite" }}></span>
              <span style={{ width: "5px", background: "#6366f1", borderRadius: "2px", height: "74%", transformOrigin: "bottom", animation: "eq 1.5s ease-in-out .3s infinite" }}></span>
              <span style={{ width: "5px", background: "#d97706", borderRadius: "2px", height: "60%", transformOrigin: "bottom", animation: "eq 1.5s ease-in-out .45s infinite" }}></span>
            </div>
          </div>
          <div
            style={{
              marginTop: "14px",
              borderTop: "1px solid rgba(124,58,237,.16)",
              paddingTop: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="serif" style={{ fontSize: "18px" }}>
              Suryansh Makharia
            </div>
            <div className="mono" style={{ fontSize: "8.5px", color: "#8b88a1" }}>
              ID 7F4A·2606
            </div>
          </div>
        </div>
        {/* glare — white sheen that tracks the pointer */}
        <div className="cred-glare" aria-hidden="true"></div>
      </div>
    </div>
  );
}
