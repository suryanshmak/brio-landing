"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  mode?: "wave" | "orb";
  theme?: "light" | "dark";
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Brio WebGL particle field — a faithful React port of the prototype's
 * <particle-field> web component (particles.js). Three.js point cloud,
 * mouse-reactive. Hero uses mode="wave" theme="light".
 */
function glowSprite() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const x = c.getContext("2d")!;
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export default function ParticleField({
  mode = "wave",
  theme = "light",
  className,
  style,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const orb = mode === "orb";
    const light = theme === "light";
    let stopped = false;
    let raf = 0;

    const W = host.clientWidth || 900;
    const H = host.clientHeight || 640;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    const cv = renderer.domElement;
    cv.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";
    host.appendChild(cv);

    const colA = new THREE.Color(light ? "#7c3aed" : "#8b5cf6");
    const colB = new THREE.Color(light ? "#0ea5e9" : "#22d3ee");
    const colC = new THREE.Color(light ? "#5f9c0b" : "#c9f24d");
    const ramp = (t: number) =>
      t < 0.5
        ? colA.clone().lerp(colB, t * 2)
        : colB.clone().lerp(colC, (t - 0.5) * 2);

    const geo = new THREE.BufferGeometry();
    let N: number;
    let base: Float32Array | null = null;

    if (orb) {
      N = 7000;
      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      base = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const phi = i * 2.399963229;
        const rad = 5.4 + (Math.random() - 0.5) * 0.5;
        const X = Math.cos(phi) * r * rad;
        const Y = y * rad;
        const Z = Math.sin(phi) * r * rad;
        pos[i * 3] = X;
        pos[i * 3 + 1] = Y;
        pos[i * 3 + 2] = Z;
        base[i * 3] = X;
        base[i * 3 + 1] = Y;
        base[i * 3 + 2] = Z;
        const c = ramp((y + 1) / 2);
        col[i * 3] = c.r;
        col[i * 3 + 1] = c.g;
        col[i * 3 + 2] = c.b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      cam.position.set(0, 0, 15);
    } else {
      const gx = 170;
      const gz = 80;
      N = gx * gz;
      const p2 = new Float32Array(N * 3);
      const c2 = new Float32Array(N * 3);
      let kk = 0;
      for (let a = 0; a < gx; a++)
        for (let b = 0; b < gz; b++) {
          p2[kk * 3] = (a / gx - 0.5) * 34;
          p2[kk * 3 + 1] = 0;
          p2[kk * 3 + 2] = (b / gz - 0.5) * 18;
          const cc = ramp(a / gx);
          c2[kk * 3] = cc.r;
          c2[kk * 3 + 1] = cc.g;
          c2[kk * 3 + 2] = cc.b;
          kk++;
        }
      geo.setAttribute("position", new THREE.BufferAttribute(p2, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(c2, 3));
      cam.position.set(0, 7.5, 15);
      cam.lookAt(0, 0, 0);
    }

    const mat = new THREE.PointsMaterial({
      size: orb ? (light ? 0.135 : 0.11) : light ? 0.16 : 0.13,
      map: glowSprite(),
      vertexColors: true,
      transparent: true,
      opacity: light ? 0.95 : 0.92,
      blending: light ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    const posArr = geo.attributes.position.array as Float32Array;
    let mx = 0;
    let my = 0;

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    host.addEventListener("pointermove", onMove);

    const resize = () => {
      const w = host.clientWidth || 900;
      const h = host.clientHeight || 640;
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", resize);
    let ro: ResizeObserver | null = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(resize);
      ro.observe(host);
    }

    const frame = () => {
      if (stopped) return;
      const t = clock.getElapsedTime();
      if (orb) {
        pts.rotation.y = t * 0.09 + mx * 0.4;
        pts.rotation.x = Math.sin(t * 0.15) * 0.1 - my * 0.3;
        const p = posArr;
        const bs = base!;
        for (let i = 0; i < N; i++) {
          const j = i * 3;
          const ph = t * 1.1 + (bs[j] + bs[j + 2]) * 0.45;
          const s = 1 + Math.sin(ph) * 0.02;
          p[j] = bs[j] * s;
          p[j + 1] = bs[j + 1] * s;
          p[j + 2] = bs[j + 2] * s;
        }
        geo.attributes.position.needsUpdate = true;
      } else {
        const pp = posArr;
        for (let m = 0; m < N; m++) {
          const q = m * 3;
          const X = pp[q];
          const Z = pp[q + 2];
          pp[q + 1] =
            Math.sin(X * 0.45 + t * 1.3) * 1.2 +
            Math.cos(Z * 0.6 + t * 0.85) * 0.9;
        }
        geo.attributes.position.needsUpdate = true;
        pts.rotation.y = Math.sin(t * 0.1) * 0.12 + mx * 0.25;
        cam.position.x = mx * 1.5;
        cam.lookAt(0, 0, 0);
      }
      renderer.render(scene, cam);
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      if (ro) ro.disconnect();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (cv.parentNode === host) host.removeChild(cv);
    };
  }, [mode, theme]);

  return <div ref={hostRef} className={className} style={style} />;
}
