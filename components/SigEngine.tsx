"use client";

import { useEffect } from "react";

/**
 * Brio v10 engine — a faithful port of the design prototype's `class Component`
 * scroll/animation runtime. One rAF loop drives everything off a lerped virtual
 * scroll (glide feel): the Scene-01 dolly-zoom through the laptop glass, the
 * four in-app stages, the noise→signal scrub, the horizontal shortlist rail,
 * kinetic variable-font stretch, the left-rail HUD, tilt cards, idle loops,
 * scramble-in labels, magnetic buttons, count-ups, starfields, the WebGL orb
 * (with 2D fallback) and the synthesized, opt-in sound design.
 * All math is ported 1:1 from the prototype.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

class SigRuntime {
  root: HTMLElement;
  q: (s: string) => HTMLElement | null;
  qa: (s: string) => HTMLElement[];
  reduced = false;
  clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
  E = {
    expOut: (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    quintOut: (t: number) => 1 - Math.pow(1 - t, 5),
    cubicIO: (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    quartIO: (t: number) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
    backOut: (t: number) => {
      const c = 2.0;
      const u = t - 1;
      return 1 + (c + 1) * u * u * u + c * u * u;
    },
  };
  mouse = { x: 0, y: 0 };
  sy: number | null = null;
  energy = 0;
  isLight = false;
  calm = 1;
  vh = 0;
  vw = 0;
  m: Record<string, any> = {};
  vis: Record<string, boolean> = {};
  railW = 0;
  zg: { cx: number; cy: number; s: number } | null = null;
  secTops: number[] = [];
  el: any = {};
  wraps: Record<string, HTMLElement | null> = {};
  sections: (HTMLElement | null)[] = [];
  sceneNames = ["THE APP", "SIGNAL", "CREDENTIAL", "SHORTLIST", "VALIDITY", "BEGIN"];
  stWin: [number, number][] = [[0.24, 0.46], [0.46, 0.64], [0.64, 0.82], [0.82, 1.01]];
  stModes = [
    "LIVE INTERVIEW · SYSTEM DESIGN",
    "SCORING · SUBSTANCE ONLY",
    "PUBLIC PROFILE · brio.so/p/aarav",
    "RECRUITER VIEW · DISCOVERY",
  ];
  stClocks = ["REC 00:07:42", "SCORED · 00:09:58", "LIVE · SHAREABLE", "RANKED BY SIGNAL"];
  zQ = '"Walk me through a system you broke — and what you did in the next hour."';
  rcM =
    "Hi Aarav — just watched your verified system-design clip. The hot-key answer was sharp. Open to a chat about Backend L4?";
  zTR =
    "YOU · \"I'd cap the blast radius first — freeze writes, bisect the deploy, then own the postmortem.\"";

  lds: any[] = [];
  loops: any[] = [];
  scrs: any[] = [];
  mags: any[] = [];
  counters: any[] = [];
  orbs: any[] = [];
  stars: any[] = [];
  tilts: any[] = [];
  dotHandlers: any[] = [];
  orbColors: any = null;
  au: any = null;
  sndOn = false;
  raf = 0;

  _t = 0;
  _t0 = 0;
  _pnow: number | null = null;
  _psy: number | null = null;
  _svel = 0;
  _typeBoost = 0;
  _tagOn = [false, false, false];
  _stIdx = 0;
  _stInit = false;
  _stP = 0;
  _zE = 0;
  _cin = 0;
  _zqn = -1;
  _ztn = -1;
  _zls = -1;
  _sec = -1;
  _whooshed = false;
  _shake = 0;
  _shook = false;
  _crx = 0;
  _cry = 0;
  _crz = false;
  _plx = 0;
  _ply = 0;
  _bandOn = false;
  _tOn = false;
  _rcDone = false;
  _rcn = -1;
  _dx: number | null = null;
  _skew = 0;
  _didx = 0;
  _hs = 0;
  _es = 0;
  _pct = -1;
  _ai = -1;
  _nv = false;
  _navHidden = false;
  _lastRawY = 0;
  _ldDone = false;
  _ferr = false;
  _copyT: any = null;
  _copyH: (() => void) | null = null;
  _sndH: (() => void) | null = null;
  _sndOnce: (() => void) | null = null;
  onMouse: ((e: MouseEvent) => void) | null = null;
  onResize: (() => void) | null = null;
  _loop: ((now: number) => void) | null = null;
  _mt: any = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.q = (s) => root.querySelector(s);
    this.qa = (s) => Array.from(root.querySelectorAll(s)) as HTMLElement[];
  }

  mount() {
    const root = this.root;
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.sy = window.scrollY;

    this.el = {
      zstick: this.q('[data-z="stick"]'), zworld: this.q('[data-z="world"]'), zscreen: this.q('[data-z="screen"]'),
      zlights: this.q('[data-z="lights"]'), zhead: this.q('[data-z="head"]'), zlap: this.q('[data-z="lap"]'),
      zglare: this.q('[data-z="glare"]'), zstat: this.q('[data-z="stat"]'), zmarq: this.q('[data-z="marq"]'),
      zcue: this.q('[data-z="cue"]'), zcrisp: this.q('[data-z="crisp"]'), zflash: this.q('[data-z="flash"]'), zspeed: this.q('[data-z="speed"]'),
      zq: this.q('[data-z="q"]'), zhint: this.q('[data-z="hint"]'), ztr: this.q('[data-z="tr"]'),
      barT: this.q('[data-z="barT"]'), barB: this.q('[data-z="barB"]'), chassis: this.q('[data-z="chassis"]'),
      stages: this.qa("[data-st]"),
      stSteps: [this.q('[data-app="st0"]'), this.q('[data-app="st1"]'), this.q('[data-app="st2"]'), this.q('[data-app="st3"]')],
      appMode: this.q('[data-app="mode"]'), appClock: this.q('[data-app="clock"]'),
      zlisten: this.q("[data-zlisten]"), ztags: this.qa("[data-ztag]"),
      rcs: this.qa("[data-rc]"), rcFit: this.q("[data-rcfit]"), rcBtn: this.q("[data-rcbtn]"), rcMsg: this.q("[data-rcmsg]"),
      pars: this.qa("[data-par]"),
      shock: this.q('[data-fg="shock"]'), rctoast: this.q("[data-rctoast]"),
      arc: this.q('[data-fg="arc"]'), score: this.q('[data-fg="score"]'), orbit: this.q('[data-fg="orbit"]'),
      band: this.q('[data-fg="band"]'), gap: this.q('[data-fg="gap"]'),
      fills: this.qa("[data-fgfill]"), nums: this.qa("[data-fgnum]"),
      prs: this.qa("[data-pr]"),
      crisp: this.q('[data-noise="crisp"]'), beam: this.q('[data-noise="beam"]'),
      rail: this.q('[data-disc="rail"]'), discCards: this.qa('[data-disc="card"]'),
      discIdx: this.q('[data-disc="idx"]'), discFill: this.q('[data-disc="fill"]'),
      hudFill: this.q('[data-hud="fill"]'), hudPct: this.q('[data-hud="pct"]'), hudLabel: this.q('[data-hud="label"]'),
      hudDots: this.qa("[data-hud-dot]"),
      heroH: this.q('[data-kin="hero"]'), endH: this.q('[data-kin="end"]'),
      navbar: this.q("[data-nav]"),
      copyBtn: this.q("[data-copy]"),
      gw: this.q("[data-gw]"), shareCard: this.q('[data-pr="1"]'),
    };
    this.wraps = {
      app: this.q("#s-app"), noise: this.q("#s-noise"), cred: this.q("#s-cred"),
      disc: this.q("#s-disc"), valid: this.q("#s-valid"), end: this.q("#s-end"),
    };
    this.sections = ["s-app", "s-noise", "s-cred", "s-disc", "s-valid", "s-end"].map((id) => this.q("#" + id));

    if (this.el.zq) this.el.zq.textContent = "";
    if (this.el.ztr) this.el.ztr.textContent = "";

    this.lds = this.qa(".ld").map((el) => ({
      el,
      delay: [0, 0.08, 0.18, 0.28, 0.42, 0.56][+(el.getAttribute("data-d") || 0)] || 0,
      done: false,
    }));
    this.loops = this.qa("[data-loop]").map((el) => ({
      el,
      kind: el.getAttribute("data-loop"),
      dur: +(el.getAttribute("data-dur") || 2),
      ph: +(el.getAttribute("data-ph") || 0),
      rev: el.getAttribute("data-rev") ? -1 : 1,
    }));
    this.scrs = this.qa("[data-scr]").map((el) => ({ el, txt: el.textContent, t0: 0, done: false, started: false }));
    this.mags = this.qa("[data-mag]").map((el) => ({ el, cx: 0, cy: 0 }));
    this.counters = this.qa("[data-count]").map((el) => ({ el, done: false }));
    if (this.reduced) {
      this._ldDone = true;
      this.scrs.forEach((s) => { s.done = true; });
    }

    this.vis = {};
    try { this.measure(); } catch (e) {}
    this.applyTheme();
    this.orbColors = this.readColors();
    this.orbs = (this.qa("canvas[data-orb]") as HTMLCanvasElement[]).map((cv) => {
      let o: any = null;
      try { o = this.makeOrbGL(cv); } catch (e) { o = null; }
      if (o) return o;
      let node: HTMLCanvasElement = cv;
      try {
        if (cv.getContext && !cv.getContext("2d")) {
          const fresh = cv.cloneNode(false) as HTMLCanvasElement;
          if (cv.parentNode) { cv.parentNode.replaceChild(fresh, cv); node = fresh; }
        }
      } catch (e) {}
      try { return this.makeOrb2D(node); }
      catch (e) {
        const k = (node.getAttribute && node.getAttribute("data-orb")) || "";
        return { key: k, secKey: k === "end" ? "end" : "app", resize() {}, tick() {} };
      }
    });

    this.stars = (this.qa("canvas[data-stars]") as HTMLCanvasElement[]).map((cv) => this.makeStars(cv));

    this.tilts = this.qa("[data-tilt]").map((w) => {
      const max = +(w.getAttribute("data-tiltmax") || 0);
      const st: any = {
        w,
        card: w.querySelector("[data-tiltcard]"),
        sheen: w.querySelector("[data-sheen]"),
        tx: 0, ty: 0, cx: 0, cy: 0,
        mx: max || 13, my: max ? max * 1.15 : 15,
      };
      st.move = (ev: MouseEvent) => {
        const r = w.getBoundingClientRect();
        st.tx = ((ev.clientY - r.top) / Math.max(1, r.height) - 0.5) * -st.mx;
        st.ty = ((ev.clientX - r.left) / Math.max(1, r.width) - 0.5) * st.my;
      };
      st.leave = () => { st.tx = 0; st.ty = 0; };
      w.addEventListener("mousemove", st.move, { passive: true });
      w.addEventListener("mouseleave", st.leave, { passive: true });
      return st;
    });

    this.dotHandlers = this.el.hudDots.map((d: HTMLElement) => {
      const h = () => {
        const t = this.q("#" + d.getAttribute("data-target"));
        if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY + 2);
      };
      d.addEventListener("click", h);
      return { d, h };
    });

    if (this.el.copyBtn) {
      this._copyH = () => {
        const url = "https://brio.so/p/aarav";
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url);
          else {
            const ta = document.createElement("textarea");
            ta.value = url; document.body.appendChild(ta); ta.select();
            document.execCommand("copy"); document.body.removeChild(ta);
          }
        } catch (e) {}
        this.el.copyBtn.textContent = "COPIED ✓";
        if (this._copyT) clearTimeout(this._copyT);
        this._copyT = setTimeout(() => { if (this.el.copyBtn) this.el.copyBtn.textContent = "COPY LINK"; }, 1600);
      };
      this.el.copyBtn.addEventListener("click", this._copyH);
    }

    const sndBtn = this.q("[data-snd]");
    if (sndBtn) {
      this._sndH = () => {
        if (!this.au) { try { this.au = this.makeAudio(); } catch (e) { this.au = null; } }
        if (!this.au) return;
        this.sndOn = !this.sndOn;
        this.au.setOn(this.sndOn);
        const tx = this.q("[data-snd-tx]");
        if (tx) tx.textContent = this.sndOn ? "SOUND — ON" : "SOUND — OFF";
        try { localStorage.setItem("brio-sound", this.sndOn ? "1" : "0"); } catch (e) {}
      };
      sndBtn.addEventListener("click", this._sndH);
      let pref: string | null = null;
      try { pref = localStorage.getItem("brio-sound"); } catch (e) {}
      if (pref === "1") {
        this._sndOnce = () => {
          removeEventListener("pointerdown", this._sndOnce!);
          removeEventListener("keydown", this._sndOnce!);
          if (!this.sndOn && this._sndH) this._sndH();
        };
        addEventListener("pointerdown", this._sndOnce, { passive: true });
        addEventListener("keydown", this._sndOnce);
      }
    }

    if (this.el.navbar) {
      this.el.navbar.style.transition = "transform .38s cubic-bezier(.22,.61,.36,1), background .3s";
      this.el.navbar.style.willChange = "transform";
    }
    this._lastRawY = window.scrollY;

    this.onMouse = (e: MouseEvent) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; };
    addEventListener("mousemove", this.onMouse, { passive: true });
    this.onResize = () => {
      this.measure();
      this.orbs.forEach((o) => o.resize());
      if (this.stars) this.stars.forEach((s) => s.resize());
    };
    addEventListener("resize", this.onResize, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => this.measure());
    this._mt = setTimeout(() => this.measure(), 350);

    if (this.reduced) { this.applyReduced(); return; }
    this._t0 = performance.now();
    this._loop = (now: number) => {
      this.raf = requestAnimationFrame(this._loop!);
      try { this.frame(now); }
      catch (e) { if (!this._ferr) { this._ferr = true; console.error("brio frame error:", e); } }
    };
    this.raf = requestAnimationFrame(this._loop);
  }

  unmount() {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this._copyT) clearTimeout(this._copyT);
    if (this._mt) clearTimeout(this._mt);
    if (this.onMouse) removeEventListener("mousemove", this.onMouse);
    if (this.onResize) removeEventListener("resize", this.onResize);
    if (this.tilts) this.tilts.forEach((s) => { s.w.removeEventListener("mousemove", s.move); s.w.removeEventListener("mouseleave", s.leave); });
    if (this.dotHandlers) this.dotHandlers.forEach((o) => o.d.removeEventListener("click", o.h));
    if (this.el && this.el.copyBtn && this._copyH) this.el.copyBtn.removeEventListener("click", this._copyH);
    const sb = this.q && this.q("[data-snd]");
    if (sb && this._sndH) sb.removeEventListener("click", this._sndH);
    if (this._sndOnce) { removeEventListener("pointerdown", this._sndOnce); removeEventListener("keydown", this._sndOnce); }
    if (this.au && this.au.close) this.au.close();
  }

  applyTheme() {
    this.isLight = this.root.getAttribute("data-theme") === "light";
    document.body.style.background = this.isLight ? "#f2f5fb" : "#04070f";
  }

  readColors() {
    const cs = getComputedStyle(this.root);
    const parse = (h: string, fb: string): number[] => {
      h = (h || "").trim() || fb;
      if (h[0] === "#") {
        let x = h.slice(1);
        if (x.length === 3) x = x.split("").map((c) => c + c).join("");
        const n = parseInt(x, 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      const m = h.match(/(\d+)[, ]+(\d+)[, ]+(\d+)/);
      return m ? [+m[1], +m[2], +m[3]] : [94, 225, 255];
    };
    return {
      a: parse(cs.getPropertyValue("--vio"), "#4f80ff"),
      b: parse(cs.getPropertyValue("--acc"), "#5ee1ff"),
      za: parse(cs.getPropertyValue("--zvio"), "#4f80ff"),
      zb: parse(cs.getPropertyValue("--zacc"), "#5ee1ff"),
    };
  }

  measure() {
    const y = window.scrollY, vh = window.innerHeight;
    this.vh = vh; this.vw = window.innerWidth;
    this.m = {};
    for (const k in this.wraps) {
      const el = this.wraps[k];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      this.m[k] = { top: r.top + y, h: el.offsetHeight };
    }
    this.m.doc = Math.max(1, document.documentElement.scrollHeight - vh);
    if (this.el.rail) this.railW = this.el.rail.scrollWidth;
    this.secTops = this.sections.map((s) => (s ? s.getBoundingClientRect().top + y : 0));
    if (this.el.zworld && this.el.zscreen) {
      const w = this.el.zworld;
      const prev = w.style.transform;
      w.style.transform = "none";
      const wr = w.getBoundingClientRect();
      const sr = this.el.zscreen.getBoundingClientRect();
      this.zg = {
        cx: sr.left - wr.left + sr.width / 2,
        cy: sr.top - wr.top + sr.height / 2,
        s: Math.max(this.vw / Math.max(1, sr.width), this.vh / Math.max(1, sr.height)) * 1.06,
      };
      w.style.transform = prev;
    }
  }

  prog(k: string, y: number) {
    const s = this.m[k];
    if (!s) return 0;
    return this.clamp((y - s.top) / Math.max(1, s.h - this.vh), 0, 1);
  }

  visCalc(y: number) {
    const pad = this.vh * 0.18;
    for (const k in this.m) {
      if (k === "doc") continue;
      const s = this.m[k];
      this.vis[k] = y + this.vh + pad > s.top && y - pad < s.top + s.h;
    }
  }

  frame(now: number) {
    const t = (now - this._t0) / 1000;
    this._t = t;
    // ---- lerped virtual scroll: everything glides ----
    const dt = Math.min(0.05, Math.max(0.001, (now - (this._pnow || now)) / 1000));
    this._pnow = now;
    const ry = window.scrollY;
    if (this.sy == null) this.sy = ry;
    const gap = ry - this.sy;
    if (Math.abs(gap) > this.vh * 3) this.sy = ry - Math.sign(gap) * this.vh * 3;
    this.sy += (ry - this.sy) * Math.min(1, 1 - Math.pow(0.0012, dt));
    if (Math.abs(ry - this.sy) < 0.4) this.sy = ry;
    const svel = (this.sy - (this._psy == null ? this.sy : this._psy)) / dt;
    this._psy = this.sy;
    this._svel = svel;
    this._typeBoost = (this._typeBoost || 0) * 0.9;
    const rawE = Math.min(1, Math.abs(svel) / (this.vh * 1.3)) + this._typeBoost;
    this.energy += (Math.min(1, rawE) - this.energy) * 0.09;
    const y = this.sy;
    this.calm = this.root.getAttribute("data-motion") === "calm" ? 0.35 : 1;
    if (this.au && this.au.on) this.au.frame(this._zE || 0, this.energy);
    this.visCalc(y);
    if (this.vis.app) this.appFrame(y, now);
    if (this.vis.noise) this.noiseFrame(y);
    if (this.vis.disc) this.discFrame(y);
    this.countersFrame();
    this.kinFrame(y, t);
    this.hudFrame(y);
    this.tiltFrame();
    this.ldFrame(t);
    this.loopsFrame(t);
    this.scrFrame(now);
    this.magFrame();
    if (this.stars) {
      for (let i = 0; i < this.stars.length; i++) {
        const s = this.stars[i];
        if (!this.vis[s.secKey]) continue;
        if (s.key === "chamber" && (this._cin || 0) < 0.03) continue;
        if (s.key === "app" && (this._zE || 0) > 0.93) continue;
        s.tick(t);
      }
    }
    const cols = this.orbColors;
    this.orbs.forEach((o) => {
      if (!this.vis[o.secKey]) return;
      if (o.key === "mini" && (this._zE || 0) >= 0.92) return;
      if (o.key === "hero" && ((this._zE || 0) < 0.5 || (this._stP || 0) > 0.62)) return;
      o.tick(t, this.mouse, cols, this.calm);
    });
  }

  /* ========== SCENE 01 · THE APP ========== */
  appFrame(y: number, now: number) {
    if (!this.zg) return;
    const p = this.prog("app", y);
    const E = this.E;
    // dolly through the glass over the first 22%
    const e = E.quartIO(this.clamp(p / 0.22, 0, 1));
    this._zE = e;
    const zg = this.zg;
    const sc = Math.pow(zg.s, e);
    const tx = (this.vw / 2 - zg.cx) * e;
    const ty = (this.vh / 2 - zg.cy) * e;
    const w = this.el.zworld;
    if (w) {
      if (e >= 0.995) { w.style.visibility = "hidden"; }
      else {
        w.style.visibility = "";
        w.style.transformOrigin = zg.cx + "px " + zg.cy + "px";
        w.style.transform =
          "translate3d(" + tx.toFixed(2) + "px," + ty.toFixed(2) + "px,0) rotate(" +
          (Math.sin(e * Math.PI) * 1.4 * this.calm).toFixed(2) + "deg) scale(" + sc.toFixed(4) + ")";
      }
    }
    const fadeEarly = this.clamp(e * 2.4, 0, 1);
    if (this.el.zhead) { this.el.zhead.style.opacity = (1 - fadeEarly).toFixed(3); this.el.zhead.style.pointerEvents = fadeEarly > 0.4 ? "none" : "auto"; }
    if (this.el.zstat) this.el.zstat.style.opacity = (1 - this.clamp(e * 3, 0, 1)).toFixed(3);
    if (this.el.zmarq) this.el.zmarq.style.opacity = (1 - this.clamp(e * 3, 0, 1)).toFixed(3);
    if (this.el.zcue) this.el.zcue.style.opacity = (1 - this.clamp(e * 4, 0, 1)).toFixed(3);
    if (this.el.zlights) this.el.zlights.style.opacity = (1 - this.clamp((e - 0.1) * 1.6, 0, 1) * 0.8).toFixed(3);
    if (this.el.zglare) this.el.zglare.style.opacity = (1 - this.clamp((e - 0.45) / 0.3, 0, 1)).toFixed(3);
    if (this.el.zflash) {
      const f = Math.sin(Math.PI * this.clamp((e - 0.84) / 0.26, 0, 1));
      this.el.zflash.style.opacity = (f * 0.55 * this.calm).toFixed(3);
      this.el.zflash.style.transform = "scale(" + (1 + f * 0.09).toFixed(3) + ")";
      if (f > 0.55 && !this._whooshed) { this._whooshed = true; if (this.au) this.au.whoosh(); this._shake = 1; }
      if (e < 0.5) this._whooshed = false;
    }
    if (this.el.zspeed) {
      const fs = Math.sin(Math.PI * this.clamp((e - 0.78) / 0.3, 0, 1));
      this.el.zspeed.style.opacity = (fs * 0.5 * this.calm).toFixed(3);
      if (fs > 0.003) this.el.zspeed.style.transform = "rotate(" + (e * 26).toFixed(1) + "deg) scale(" + (1 + fs * 0.1).toFixed(3) + ")";
    }
    // impact shake at pass-through
    if (this._shake > 0.01) {
      this._shake *= 0.86;
      const s = this._shake * 5 * this.calm;
      if (this.el.zstick) this.el.zstick.style.transform =
        "translate3d(" + ((Math.random() - 0.5) * s).toFixed(1) + "px," + ((Math.random() - 0.5) * s).toFixed(1) + "px,0)";
      this._shook = true;
    } else if (this._shook) {
      this._shook = false;
      if (this.el.zstick) this.el.zstick.style.transform = "";
    }
    // cinema letterbox during the dolly
    if (this.el.barT && this.el.barB) {
      const bk = Math.min(
        this.E.cubicIO(this.clamp((e - 0.02) / 0.2, 0, 1)),
        1 - this.E.cubicIO(this.clamp((e - 0.85) / 0.14, 0, 1))
      );
      this.el.barT.style.transform = "translateY(" + ((bk - 1) * 101).toFixed(1) + "%)";
      this.el.barB.style.transform = "translateY(" + ((1 - bk) * 101).toFixed(1) + "%)";
    }
    // cursor parallax on the laptop while we're still in the room
    if (this.el.chassis) {
      const on = e < 0.1;
      const tgx = on ? ((this.mouse.y / this.vh) - 0.56) * -3.4 * this.calm : 0;
      const tgy = on ? ((this.mouse.x / this.vw) - 0.5) * 4.2 * this.calm : 0;
      this._crx = (this._crx || 0) + (tgx - this._crx) * 0.06;
      this._cry = (this._cry || 0) + (tgy - this._cry) * 0.06;
      const live = Math.abs(this._crx) + Math.abs(this._cry) > 0.03;
      if (live || this._crz) this.el.chassis.style.transform = live ? "rotateX(" + this._crx.toFixed(2) + "deg) rotateY(" + this._cry.toFixed(2) + "deg)" : "";
      this._crz = live;
    }
    // room lights drift opposite the cursor (depth)
    if (this.el.zlights) {
      const px = this.mouse.x / this.vw - 0.5, py = this.mouse.y / this.vh - 0.5;
      this._plx = (this._plx || 0) + (px - this._plx) * 0.04;
      this._ply = (this._ply || 0) + (py - this._ply) * 0.04;
      this.el.zlights.style.transform = "translate3d(" + (this._plx * -18 * this.calm).toFixed(1) + "px," + (this._ply * -12 * this.calm).toFixed(1) + "px,0)";
    }
    const cin = E.expOut(this.clamp((e - 0.8) / 0.18, 0, 1));
    if (this.el.zcrisp) {
      this.el.zcrisp.style.opacity = cin.toFixed(3);
      this.el.zcrisp.style.transform = cin >= 0.999 ? "none" : "scale(" + (1.08 - 0.08 * cin).toFixed(4) + ")";
      this.el.zcrisp.style.pointerEvents = cin > 0.6 ? "auto" : "none";
    }
    this._cin = cin;

    /* ----- app journey stages ----- */
    this._stP = p;
    const W = this.stWin;
    let idx = 0;
    for (let i = 0; i < W.length; i++) if (p >= W[i][0]) idx = i;
    if (idx !== this._stIdx || !this._stInit) {
      this._stInit = true;
      this._stIdx = idx;
      if (this.el.appMode) this.el.appMode.textContent = this.stModes[idx];
      if (this.el.appClock) this.el.appClock.textContent = this.stClocks[idx];
      this.el.stSteps.forEach((s: HTMLElement | null, i: number) => { if (s) s.style.color = i === idx ? "var(--zacc)" : "#5d6a92"; });
      if (this.au) this.au.tick(620 + idx * 90);
    }
    const skv = this.clamp((this._svel || 0) * 0.00045, -0.7, 0.7);
    this.el.stages.forEach((stg: HTMLElement, i: number) => {
      const a = W[i][0], b = W[i][1];
      const t01 = this.clamp((p - a) / (b - a), 0, 1);
      const inE = i === 0 ? 1 : E.expOut(this.clamp(t01 / 0.14, 0, 1));
      const outK = i === W.length - 1 ? 0 : E.cubicIO(this.clamp((t01 - 0.88) / 0.12, 0, 1));
      let op = Math.min(inE, 1 - outK);
      if (p < a - 0.001 || p > b + 0.001) op = i === 0 && p <= a ? 1 : i === W.length - 1 && p >= b ? 1 : 0;
      stg.style.opacity = op.toFixed(3);
      stg.style.transform = "translate3d(0," + (((1 - inE) * 60 - outK * 54) * (i === 0 ? 0 : 1)).toFixed(1) + "px,0) skewY(" + skv.toFixed(3) + "deg)";
      stg.style.filter = (1 - inE) + outK > 0.04 ? "blur(" + ((1 - inE) * 9 + outK * 8).toFixed(1) + "px)" : "none";
      stg.style.pointerEvents = op > 0.5 ? "auto" : "none";
      if (op <= 0.01) return;
      if (i === 0) this.stageInterview(t01);
      else if (i === 1) this.stageScore(t01);
      else if (i === 2) this.stageShare(t01);
      else if (i === 3) this.stageRecruit(t01);
    });
  }

  stageInterview(t: number) {
    const E = this.E;
    if (this.el.zq) {
      const qk = this.clamp((t - 0.06) / 0.4, 0, 1);
      const n = Math.round(this.zQ.length * E.quintOut(qk));
      if (n !== this._zqn) {
        this._zqn = n;
        this._typeBoost = Math.max(this._typeBoost, 0.45);
        if (this.au) this.au.type();
        this.el.zq.textContent = this.zQ.slice(0, n) + (n < this.zQ.length && n > 0 ? "▌" : "");
      }
    }
    if (this.el.zhint) this.el.zhint.style.opacity = (t > 0.5 ? this.clamp(1 - (t - 0.5) / 0.1, 0, 1) : this.clamp((t - 0.42) / 0.08, 0, 1)).toFixed(3);
    if (this.el.ztr) {
      const tk = this.clamp((t - 0.56) / 0.34, 0, 1);
      this.el.ztr.style.opacity = this.clamp(tk * 4, 0, 1).toFixed(3);
      const n = Math.round(this.zTR.length * tk);
      if (n !== this._ztn) {
        this._ztn = n;
        this._typeBoost = Math.max(this._typeBoost, 0.6);
        if (this.au) this.au.type();
        let txt = this.zTR.slice(0, n);
        if (n > 0 && n < this.zTR.length) {
          const G = "#/\\|<>[]{}=+*%$@01";
          txt += G[(Math.random() * G.length) | 0] + G[(Math.random() * G.length) | 0];
        }
        this.el.ztr.textContent = txt;
      }
    }
    // signal tags pop as the system hears key phrases in YOUR answer
    if (this.el.ztags && this.el.ztags.length) {
      const tk = this.clamp((t - 0.56) / 0.34, 0, 1);
      const th = [0.3, 0.62, 0.92];
      for (let i = 0; i < this.el.ztags.length; i++) {
        const k = this.E.backOut(this.clamp((tk - th[i]) / 0.1, 0, 1));
        const el = this.el.ztags[i];
        el.style.opacity = this.clamp(k, 0, 1).toFixed(2);
        el.style.transform = "scale(" + Math.max(0.6, k).toFixed(3) + ")";
        const on = k > 0.04;
        if (on && !this._tagOn[i] && this.au) this.au.tick(840 + i * 140);
        this._tagOn[i] = on;
      }
      if (this.el.zlisten) {
        const done = tk >= 0.99;
        const live = tk > 0 && !done;
        const stt = done ? 2 : live ? 1 : 0;
        if (stt !== this._zls) {
          this._zls = stt;
          this.el.zlisten.textContent = stt === 2 ? "CAPTURED ✓" : stt === 1 ? "HEARING SIGNAL…" : "LISTENING…";
          this.el.zlisten.style.color = stt ? "var(--zacc)" : "#7d8bb8";
        }
      }
    }
    // the REC clock actually runs while you're in the room
    const sec = 462 + Math.round(t * 46);
    if (sec !== this._sec && this.el.appClock && this._stIdx === 0) {
      this._sec = sec;
      this.el.appClock.textContent = "REC 00:" + String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
    }
  }

  stageScore(t: number) {
    const E = this.E;
    this.el.fills.forEach((f: HTMLElement, i: number) => {
      const k = E.expOut(this.clamp((t - 0.06 - i * 0.06) / 0.42, 0, 1));
      f.style.transform = "scaleX(" + ((k * +(f.getAttribute("data-t") || 0)) / 100).toFixed(4) + ")";
    });
    this.el.nums.forEach((n: HTMLElement, i: number) => {
      const k = E.expOut(this.clamp((t - 0.06 - i * 0.06) / 0.42, 0, 1));
      const v = Math.round(k * +(n.getAttribute("data-t") || 0));
      if (v !== +(n.textContent || 0)) n.textContent = String(v);
    });
    const k = E.expOut(this.clamp((t - 0.12) / 0.5, 0, 1));
    const C = 942.48;
    if (this.el.arc) this.el.arc.style.strokeDashoffset = (C * (1 - 0.84 * k)).toFixed(1);
    if (this.el.score) {
      const v = Math.round(84 * k);
      if (v !== +(this.el.score.textContent || 0)) this.el.score.textContent = String(v);
    }
    if (this.el.orbit) this.el.orbit.style.transform = "rotate(" + (k * 200).toFixed(1) + "deg)";
    const gk = E.expOut(this.clamp((t - 0.4) / 0.2, 0, 1));
    if (this.el.gap) {
      this.el.gap.style.opacity = gk.toFixed(3);
      this.el.gap.style.transform = "translate3d(0," + ((1 - gk) * 22).toFixed(1) + "px,0)";
    }
    const bk = E.backOut(this.clamp((t - 0.62) / 0.2, 0, 1));
    if (this.el.band) {
      this.el.band.style.opacity = this.clamp(bk, 0, 1).toFixed(3);
      this.el.band.style.transform = "scale(" + Math.max(0.6, bk).toFixed(3) + ")";
    }
    const bon = bk > 0.05;
    if (bon && !this._bandOn && this.au) this.au.chime();
    this._bandOn = bon;
    if (this.el.shock) {
      const sw = this.clamp((t - 0.64) / 0.3, 0, 1);
      this.el.shock.style.opacity = sw > 0 && sw < 1 ? ((1 - sw) * 0.7).toFixed(3) : "0";
      this.el.shock.style.transform = "translate(-50%,-50%) scale(" + (0.6 + sw * 1.3).toFixed(3) + ")";
    }
  }

  stageShare(t: number) {
    const E = this.E;
    this.el.prs.forEach((el: HTMLElement, i: number) => {
      const k = E.expOut(this.clamp((t - 0.06 - i * 0.1) / 0.3, 0, 1));
      el.style.opacity = k.toFixed(3);
      el.style.transform = "translate3d(0," + ((1 - k) * 40).toFixed(1) + "px,0)";
      el.style.filter = k < 0.97 ? "blur(" + ((1 - k) * 5).toFixed(1) + "px)" : "none";
    });
  }

  stageRecruit(t: number) {
    const E = this.E;
    if (this.el.rctoast) {
      const k = E.expOut(this.clamp(t / 0.12, 0, 1)) * (1 - E.cubicIO(this.clamp((t - 0.34) / 0.1, 0, 1)));
      this.el.rctoast.style.opacity = k.toFixed(3);
      this.el.rctoast.style.transform = "translate(-50%," + ((k - 1) * 16).toFixed(1) + "px)";
      const ton = k > 0.1;
      if (ton && !this._tOn && this.au) this.au.tick(980);
      this._tOn = ton;
    }
    this.el.rcs.forEach((el: HTMLElement, i: number) => {
      const k = E.expOut(this.clamp((t - 0.04 - i * 0.05) / 0.26, 0, 1));
      const dim = el.getAttribute("data-dim");
      el.style.opacity = (dim ? k * +dim : k).toFixed(3);
      el.style.transform = "translate3d(0," + ((1 - k) * 34).toFixed(1) + "px,0)";
    });
    if (this.el.rcFit) {
      const k = E.expOut(this.clamp((t - 0.18) / 0.3, 0, 1));
      const v = Math.round(98 * k);
      if (v !== +(this.el.rcFit.textContent || 0)) this.el.rcFit.textContent = String(v);
    }
    if (this.el.rcBtn) {
      const press = Math.sin(Math.PI * this.clamp((t - 0.5) / 0.1, 0, 1));
      this.el.rcBtn.style.transform = "scale(" + (1 - 0.1 * press).toFixed(3) + ")";
      const done = t > 0.58;
      if (done !== this._rcDone) {
        this._rcDone = done;
        this.el.rcBtn.textContent = done ? "SHORTLISTED ✓" : "SHORTLIST";
        if (done && this.au) this.au.thock();
      }
    }
    if (this.el.rcMsg) {
      const mk = this.clamp((t - 0.62) / 0.3, 0, 1);
      const n = Math.round(this.rcM.length * mk);
      if (n !== this._rcn) { this._rcn = n; this.el.rcMsg.textContent = this.rcM.slice(0, n) + (n > 0 && n < this.rcM.length ? "▌" : ""); }
    }
  }

  countersFrame() {
    if (this.reduced || !this.counters) return;
    for (let i = 0; i < this.counters.length; i++) {
      const c = this.counters[i];
      if (c.done) continue;
      const r = c.el.getBoundingClientRect();
      if (r.top < this.vh * 0.84 && r.bottom > 0) { c.done = true; this.countUp(c.el); }
    }
  }

  /* ---------- NOISE ---------- */
  noiseFrame(y: number) {
    const p = this.prog("noise", y);
    let k = this.clamp((p - 0.1) / 0.64, 0, 1);
    k = k * k * (3 - 2 * k);
    if (this.el.crisp) this.el.crisp.style.clipPath = k >= 1 ? "none" : "inset(0 " + ((1 - k) * 100).toFixed(2) + "% 0 0)";
    if (this.el.beam) {
      this.el.beam.style.left = (k * 100).toFixed(2) + "%";
      this.el.beam.style.opacity = k > 0.004 && k < 0.996 ? "1" : "0";
    }
    if (this.el.pars && this.el.pars.length) {
      const tt = this._t || 0;
      const cfg = [[0.12, -1, 0.75, 0], [0.86, 1, 0.6, 2.1], [0.2, -1, 0.7, 4.2]];
      for (let i = 0; i < this.el.pars.length; i++) {
        const el = this.el.pars[i], c = cfg[i] || cfg[0];
        const push = this.E.expOut(this.clamp((k - c[0]) / 0.2, 0, 1));
        const bob = Math.sin(tt * 0.7 + c[3]) * 7 * this.calm * (1 - push);
        el.style.transform = "translate3d(" + (c[1] * push * 120).toFixed(1) + "px," + bob.toFixed(1) + "px,0)";
        el.style.opacity = (c[2] * (1 - 0.85 * push)).toFixed(3);
      }
    }
  }

  /* ---------- DISCOVERY ---------- */
  discFrame(y: number) {
    const p = this.prog("disc", y);
    const max = Math.max(0, (this.railW || 0) + this.vw * 0.12 - this.vw);
    const x = -p * max;
    if (this._dx == null) this._dx = x;
    const vel = x - this._dx;
    this._dx = x;
    this._skew = (this._skew || 0) * 0.86 + this.clamp(vel * 0.045, -3.2, 3.2) * 0.14;
    if (this.el.rail) this.el.rail.style.transform = "translate3d(" + x.toFixed(1) + "px,0,0) skewX(" + this._skew.toFixed(2) + "deg)";
    const cxv = this.vw / 2;
    this.el.discCards.forEach((c: HTMLElement) => {
      const r = c.getBoundingClientRect();
      const d = Math.min(1, Math.abs(r.left + r.width / 2 - cxv) / (this.vw * 0.78));
      c.style.transform = "scale(" + (1 - 0.05 * d).toFixed(3) + ")";
      c.style.opacity = (1 - 0.32 * d).toFixed(3);
    });
    const n = this.el.discCards.length || 4;
    const idx = Math.min(n, Math.max(1, Math.round(p * (n - 1)) + 1));
    if (idx !== this._didx) {
      this._didx = idx;
      if (this.el.discIdx) this.el.discIdx.textContent = "0" + idx + " / 0" + n;
    }
    if (this.el.discFill) this.el.discFill.style.transform = "scaleX(" + p.toFixed(3) + ")";
  }

  /* ---------- KINETIC TYPE ---------- */
  kinFrame(y: number, t: number) {
    if (this.root.getAttribute("data-type") === "serif") return;
    const intro = this.E.expOut(this.clamp(t / 1.1, 0, 1));
    if (this.el.heroH) {
      const st = 82 + 31 * intro;
      if (Math.abs(st - (this._hs || 0)) > 0.35) {
        this._hs = st;
        this.el.heroH.style.fontStretch = st.toFixed(1) + "%";
        this.el.heroH.style.fontWeight = String(Math.round(540 + 260 * intro));
      }
    }
    if (this.el.endH && this.m.end) {
      const k = this.clamp((y - (this.m.end.top - this.vh)) / (this.vh * 0.95), 0, 1);
      const st = 80 + 33 * this.E.expOut(k);
      if (Math.abs(st - (this._es || 0)) > 0.35) { this._es = st; this.el.endH.style.fontStretch = st.toFixed(1) + "%"; }
    }
  }

  /* ---------- HUD ---------- */
  hudFrame(y: number) {
    const p = this.clamp(y / this.m.doc, 0, 1);
    if (this.el.hudFill) this.el.hudFill.style.transform = "scaleY(" + p.toFixed(4) + ")";
    const pct = Math.round(p * 100);
    if (pct !== this._pct) {
      this._pct = pct;
      if (this.el.hudPct) this.el.hudPct.textContent = String(pct).padStart(3, "0");
    }
    let ai = 0;
    const yy = y + this.vh * 0.45;
    for (let i = 0; i < this.secTops.length; i++) if (yy >= this.secTops[i]) ai = i;
    if (ai !== this._ai) {
      this._ai = ai;
      if (this.el.hudLabel) this.el.hudLabel.textContent = this.sceneNames[ai];
      this.el.hudDots.forEach((d: HTMLElement, i: number) => {
        d.style.background = i === ai ? "var(--acc)" : "var(--bgA)";
        d.style.borderColor = i === ai ? "var(--acc)" : "var(--line2)";
        d.style.boxShadow = i === ai ? "0 0 10px var(--acc)" : "none";
      });
    }
    const nv = y > 40;
    if (nv !== this._nv) {
      this._nv = nv;
      if (this.el.navbar) this.el.navbar.style.background = nv ? "var(--navS)" : "var(--nav0)";
    }
    // hide on scroll down, reveal on scroll up (raw scroll — feels immediate)
    if (this.el.navbar) {
      const ry = window.scrollY;
      const dy = ry - this._lastRawY;
      this._lastRawY = ry;
      let hidden = this._navHidden;
      if (ry <= 60) hidden = false;
      else if (dy > 2 && ry > 120) hidden = true;
      else if (dy < -2) hidden = false;
      if (hidden !== this._navHidden) {
        this._navHidden = hidden;
        this.el.navbar.style.transform = hidden ? "translateY(-102%)" : "translateY(0)";
      }
    }
  }

  /* ---------- TILT ---------- */
  tiltFrame() {
    this.tilts.forEach((s) => {
      s.cx += (s.tx - s.cx) * 0.09;
      s.cy += (s.ty - s.cy) * 0.09;
      const live = Math.abs(s.cx) + Math.abs(s.cy) > 0.02;
      if (!live && !s._z) return;
      s._z = live;
      if (s.card) s.card.style.transform = "rotateX(" + (s.cx * this.calm).toFixed(2) + "deg) rotateY(" + (s.cy * this.calm).toFixed(2) + "deg)";
      if (s.sheen) s.sheen.style.transform = "translate3d(" + (s.cy * 10).toFixed(1) + "px," + (s.cx * -10).toFixed(1) + "px,0)";
    });
  }

  ldFrame(t: number) {
    if (this._ldDone || !this.lds) return;
    let all = true;
    for (let i = 0; i < this.lds.length; i++) {
      const o = this.lds[i];
      if (o.done) continue;
      const k = this.E.expOut(this.clamp((t - o.delay) / 1.0, 0, 1));
      if (k >= 1) { o.el.style.transform = ""; o.done = true; continue; }
      o.el.style.transform = "translate3d(0," + ((1 - k) * 46).toFixed(2) + "px,0)";
      all = false;
    }
    if (all) this._ldDone = true;
  }

  loopsFrame(t: number) {
    if (!this.loops || this.reduced) return;
    const TAU = Math.PI * 2;
    for (let i = 0; i < this.loops.length; i++) {
      const o = this.loops[i];
      let u = (t - o.ph) / o.dur;
      u = u - Math.floor(u);
      const w = 0.5 - 0.5 * Math.cos(u * TAU);
      if (o.kind === "dotp") o.el.style.opacity = (0.35 + 0.65 * w).toFixed(3);
      else if (o.kind === "eq") o.el.style.transform = "scaleY(" + (0.3 + 0.7 * w).toFixed(3) + ")";
      else if (o.kind === "floaty") o.el.style.transform = "translate3d(0," + (-8 * w * this.calm).toFixed(2) + "px,0)";
      else if (o.kind === "marq") o.el.style.transform = "translate3d(-" + (u * 50).toFixed(3) + "%,0,0)";
      else if (o.kind === "flowx") o.el.style.transform = "translateX(-" + (300 * u).toFixed(1) + "px)";
      else if (o.kind === "pulse") o.el.style.transform = "scale(" + (1 + 0.04 * w * this.calm).toFixed(4) + ")";
      else if (o.kind === "sweep") o.el.style.transform = "translateX(" + (u * 160 - 30).toFixed(1) + "vw)";
      else if (o.kind === "rot") o.el.style.transform = "rotate(" + (u * 360 * o.rev).toFixed(2) + "deg)";
      else if (o.kind === "tglow") {
        const b = (this.orbColors && this.orbColors.b) || [94, 225, 255];
        o.el.style.textShadow = "0 0 " + (16 + 30 * w).toFixed(0) + "px rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + (0.16 + 0.26 * w).toFixed(2) + ")";
      } else if (o.kind === "scanY") {
        const q = u / 0.26;
        if (q < 1) {
          o.el.style.opacity = (Math.sin(Math.PI * q) * 0.85).toFixed(3);
          o.el.style.transform = "translate3d(0," + (q * 330 - 18).toFixed(1) + "px,0)";
        } else if (o.el.style.opacity !== "0") o.el.style.opacity = "0";
      } else if (o.kind === "ripple") {
        o.el.style.opacity = ((1 - u) * (1 - u) * 0.3).toFixed(3);
        o.el.style.transform = "scale(" + (0.45 + u * 1.75).toFixed(3) + ")";
      }
    }
  }

  scrFrame(now: number) {
    if (!this.scrs) return;
    const GLYPHS = "#/\\|<>[]{}=+*%$@0123456789ABCDEF·—";
    for (let i = 0; i < this.scrs.length; i++) {
      const s = this.scrs[i];
      if (s.done) continue;
      if (!s.started) {
        const r = s.el.getBoundingClientRect();
        if (r.top < this.vh * 0.88 && r.bottom > 0) { s.started = true; s.t0 = now; }
        continue;
      }
      const k = this.clamp((now - s.t0) / 750, 0, 1);
      if (k >= 1) { s.el.textContent = s.txt; s.done = true; continue; }
      const n = s.txt.length;
      const solid = Math.floor(this.E.quintOut(k) * n);
      let out = s.txt.slice(0, solid);
      for (let j = solid; j < n; j++) {
        const ch = s.txt[j];
        out += ch === " " || ch === "·" ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      s.el.textContent = out;
    }
  }

  magFrame() {
    if (!this.mags) return;
    const R = 150, amp = 9 * this.calm;
    for (let i = 0; i < this.mags.length; i++) {
      const m = this.mags[i];
      const r = m.el.getBoundingClientRect();
      if (r.bottom < -60 || r.top > this.vh + 60) {
        if (m._z) { m.el.style.transform = ""; m._z = false; m.cx = 0; m.cy = 0; }
        continue;
      }
      const dx = this.mouse.x - (r.left + r.width / 2);
      const dy = this.mouse.y - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy);
      let tx = 0, ty = 0;
      if (d < R && d > 0) {
        const pull = 1 - d / R;
        tx = (dx / d) * pull * amp * 1.6;
        ty = (dy / d) * pull * amp;
      }
      m.cx += (tx - m.cx) * 0.14;
      m.cy += (ty - m.cy) * 0.14;
      const live = Math.abs(m.cx) + Math.abs(m.cy) > 0.05;
      if (live || m._z) {
        m._z = live;
        m.el.style.transform = live ? "translate3d(" + m.cx.toFixed(1) + "px," + m.cy.toFixed(1) + "px,0)" : "";
      }
    }
  }

  countUp(el: HTMLElement) {
    const target = +(el.getAttribute("data-count") || 0);
    const fmt = el.getAttribute("data-fmt");
    const t0 = performance.now(), dur = 1500;
    const E = this.E, clamp = this.clamp;
    const step = (now: number) => {
      const k = E.expOut(clamp((now - t0) / dur, 0, 1));
      const v = Math.round(target * k);
      el.textContent = fmt === "plus" ? "+" + v : fmt === "pct" ? v + "%" : v.toLocaleString("en-US");
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- STARFIELD ---------- */
  makeStars(cv: HTMLCanvasElement) {
    const comp = this;
    const ctx = cv.getContext("2d");
    const key = cv.getAttribute("data-stars");
    const o: any = {
      key,
      secKey: key === "end" ? "end" : "app",
      w: 0, h: 0, ps: [] as any[], sh: null as any,
      resize() {
        if (!ctx) return;
        const r = cv.getBoundingClientRect();
        if (!r.width) return;
        const d = Math.min(window.devicePixelRatio || 1, 1.6);
        o.w = r.width; o.h = r.height;
        cv.width = Math.round(r.width * d);
        cv.height = Math.round(r.height * d);
        ctx.setTransform(d, 0, 0, d, 0, 0);
        const n = Math.min(210, Math.round((r.width * r.height) / (key === "chamber" ? 8600 : 11500)));
        o.ps = [];
        for (let i = 0; i < n; i++) o.ps.push({ x: Math.random(), y: Math.random(), z: 0.25 + Math.random() * 0.75, tw: Math.random() * 6.28, a: Math.random() < 0.16 });
      },
      tick(t: number) {
        if (!ctx) return;
        if (!o.w) { o.resize(); if (!o.w) return; }
        const w = o.w, h = o.h, cx = w / 2, cy = h * (key === "chamber" ? 0.46 : 0.5);
        ctx.clearRect(0, 0, w, h);
        const dark = key === "chamber" || !comp.isLight;
        const B = (comp.orbColors && comp.orbColors.b) || [94, 225, 255];
        const en = (comp.energy || 0) * (comp.calm == null ? 1 : comp.calm);
        const mx = comp.mouse.x / Math.max(1, comp.vw || w) - 0.5, my = comp.mouse.y / Math.max(1, comp.vh || h) - 0.5;
        for (let i = 0; i < o.ps.length; i++) {
          const p = o.ps[i];
          const x = (p.x + t * 0.0022 * p.z) % 1;
          const px = x * w - mx * 26 * p.z, py = p.y * h - my * 18 * p.z;
          const twk = 0.5 + 0.5 * Math.sin(t * (1 + p.z) + p.tw);
          let al = p.z * (0.22 + 0.5 * twk);
          if (!dark) al *= 0.5;
          const rr = 0.5 + p.z * (p.a ? 1.3 : 0.9);
          if (p.a) ctx.fillStyle = "rgba(" + B[0] + "," + B[1] + "," + B[2] + "," + al.toFixed(3) + ")";
          else ctx.fillStyle = dark ? "rgba(196,216,255," + al.toFixed(3) + ")" : "rgba(46,66,120," + al.toFixed(3) + ")";
          if (en > 0.06) {
            const dx = px - cx, dy = py - cy;
            const dd = Math.max(1, Math.hypot(dx, dy));
            const k = en * p.z * (key === "app" ? 60 : 34);
            ctx.strokeStyle = ctx.fillStyle as string;
            ctx.lineWidth = rr;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + (dx / dd) * k, py + (dy / dd) * k);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(px, py, rr, 0, 6.2832);
            ctx.fill();
          }
        }
        if (key !== "app" && dark) {
          if (o.sh && o.sh.life > 0) {
            const s = o.sh;
            s.x += s.vx; s.y += s.vy; s.life -= 0.017;
            const g = ctx.createLinearGradient(s.x - s.vx * 9, s.y - s.vy * 9, s.x, s.y);
            g.addColorStop(0, "rgba(196,216,255,0)");
            g.addColorStop(1, "rgba(210,230,255," + (0.65 * Math.max(0, s.life)).toFixed(3) + ")");
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(s.x - s.vx * 9, s.y - s.vy * 9);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();
          } else if (Math.random() < 0.0035) {
            o.sh = { x: w * (0.15 + Math.random() * 0.7), y: h * (0.08 + Math.random() * 0.3), vx: (Math.random() < 0.5 ? -1 : 1) * (4.5 + Math.random() * 3), vy: 2 + Math.random() * 2.2, life: 1 };
          }
        }
      },
    };
    o.resize();
    return o;
  }

  /* ---------- WEBGL ORB (free-form, edge-faded — never a square) ---------- */
  makeOrbGL(cv: HTMLCanvasElement) {
    const comp = this;
    const gl = cv.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false }) as WebGLRenderingContext | null;
    if (!gl) return null;
    const VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
    const FS =
      "precision highp float;\n" +
      "uniform vec2 uR;uniform float uT;uniform vec2 uM;uniform float uP;uniform vec3 uA;uniform vec3 uB;uniform float uL;uniform float uC;uniform float uRb;uniform vec2 uF;uniform float uE;\n" +
      "float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\n" +
      "float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);\n" +
      "return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}\n" +
      "float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n2(p);p=p*2.03+vec2(7.3,3.1);a*=.5;}return v;}\n" +
      "void main(){\n" +
      "vec2 uv=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);\n" +
      "float t=uT;\n" +
      "float w1=fbm(uv*1.8+vec2(t*.16,-t*.12));\n" +
      "float w2=fbm(uv*2.6-vec2(t*.1,t*.14)+4.7);\n" +
      "vec2 wp=uv+.24*vec2(w1-.5,w2-.5);\n" +
      "float r=length(wp);\n" +
      "float an=atan(wp.y,wp.x);\n" +
      "float breath=.5+.5*sin(t*1.7)*sin(t*.43+1.3);\n" +
      "float amp=mix(.4,1.,uC)*(.5+.5*breath)+.9*uE;\n" +
      "float mA=atan(uM.y,uM.x);\n" +
      "float dA=abs(mod(an-mA+3.14159,6.28318)-3.14159);\n" +
      "float foc=exp(-dA*dA*2.2)*uP;\n" +
      "float wob=(fbm(vec2(an*1.3+t*.2,t*.12))-.5)*2.;\n" +
      "float wob2=(fbm(vec2(an*3.1-t*.14,7.-t*.09))-.5)*2.;\n" +
      "float rad=uRb*(1.+.22*wob*(.5+.5*amp)+.09*wob2)+.12*foc;\n" +
      "float d=r-rad;\n" +
      "float body=smoothstep(.03,-.14,d);\n" +
      "float core=fbm(wp*3.4+vec2(0.,t*.22));\n" +
      "float rim=exp(-abs(d)*20.)*(.5+.55*core+.6*foc);\n" +
      "float fil=pow(fbm(vec2(an*5.,r*6.-t*.8)),3.)*exp(-max(0.,d)*5.)*(.6+.9*amp);\n" +
      "float halo=exp(-max(0.,d)*3.)*.45;\n" +
      "float m=body*(.3+.9*core)*(.55+.5*amp)+rim*1.25+fil+halo;\n" +
      "float fade=1.-smoothstep(uF.x,uF.y,length(uv));\n" +
      "vec2 eq=abs(gl_FragCoord.xy/uR-.5)*2.;\n" +
      "fade*=(1.-smoothstep(.7,.96,max(eq.x,eq.y)));\n" +
      "m*=fade;\n" +
      "vec3 col=mix(uA,uB,clamp(core*.75+foc*.9+rim*.3,0.,1.));\n" +
      "float alpha=clamp(m,0.,1.);\n" +
      "vec3 rgb=col*(.45+.85*min(m,1.7));\n" +
      "if(uL>.5){rgb=col*.92;alpha=clamp(m*.85,0.,.92);}\n" +
      "gl_FragColor=vec4(rgb,alpha);\n" +
      "}";
    const mk = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader");
      return s;
    };
    const pr = gl.createProgram()!;
    gl.attachShader(pr, mk(gl.VERTEX_SHADER, VS));
    gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) throw new Error("link");
    gl.useProgram(pr);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U: Record<string, WebGLUniformLocation | null> = {};
    ["uR", "uT", "uM", "uP", "uA", "uB", "uL", "uC", "uRb", "uF", "uE"].forEach((n) => { U[n] = gl.getUniformLocation(pr, n); });
    const key = cv.getAttribute("data-orb");
    const useZ = cv.getAttribute("data-cols") === "z";
    const rb = +(cv.getAttribute("data-rb") || 0.34);
    const fadeParts = (cv.getAttribute("data-fade") || ".48,.7").split(",");
    const f0 = +fadeParts[0], f1 = +fadeParts[1];
    const o: any = {
      key,
      secKey: key === "end" ? "end" : "app",
      w: 0, h: 0,
      resize() {
        const r = cv.getBoundingClientRect();
        if (!r.width) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.4);
        o.w = r.width; o.h = r.height;
        cv.width = Math.round(r.width * dpr);
        cv.height = Math.round(r.height * dpr);
        gl.viewport(0, 0, cv.width, cv.height);
      },
      tick(t: number, mouse: { x: number; y: number }, cols: any, calm: number) {
        if (!o.w) { o.resize(); if (!o.w) return; }
        const A = useZ ? cols.za : cols.a;
        const B = useZ ? cols.zb : cols.b;
        const rect = cv.getBoundingClientRect();
        const mn = Math.min(o.w, o.h);
        const mx = (mouse.x - rect.left - o.w / 2) / mn;
        const my = -(mouse.y - rect.top - o.h / 2) / mn;
        const dist = Math.hypot(mouse.x - (rect.left + o.w / 2), mouse.y - (rect.top + o.h / 2));
        const prox = Math.max(0, 1 - dist / (mn * 1.1)) * calm;
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(U.uR, cv.width, cv.height);
        gl.uniform1f(U.uT, t);
        gl.uniform2f(U.uM, mx, my);
        gl.uniform1f(U.uP, prox);
        gl.uniform3f(U.uA, A[0] / 255, A[1] / 255, A[2] / 255);
        gl.uniform3f(U.uB, B[0] / 255, B[1] / 255, B[2] / 255);
        gl.uniform1f(U.uL, comp.isLight && !useZ ? 1 : 0);
        gl.uniform1f(U.uC, calm);
        gl.uniform1f(U.uRb, rb);
        gl.uniform2f(U.uF, f0, f1);
        gl.uniform1f(U.uE, comp.energy || 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      },
    };
    o.resize();
    return o;
  }

  /* ---------- 2D FALLBACK ORB ---------- */
  makeOrb2D(cv: HTMLCanvasElement) {
    const ctx = cv.getContext("2d");
    const comp = this;
    const key = cv.getAttribute("data-orb");
    const useZ = cv.getAttribute("data-cols") === "z";
    const secKey = key === "end" ? "end" : "app";
    if (!ctx) return { key, secKey, resize() {}, tick() {} };
    const rb = +(cv.getAttribute("data-rb") || 0.3);
    const o: any = {
      key, secKey,
      n: 104, rr: rb,
      w: 0, h: 0,
      resize() {
        const r = cv.getBoundingClientRect();
        if (!r.width) return;
        const d = Math.min(window.devicePixelRatio || 1, 2);
        o.w = r.width; o.h = r.height;
        cv.width = Math.round(r.width * d);
        cv.height = Math.round(r.height * d);
        ctx.setTransform(d, 0, 0, d, 0, 0);
      },
      tick(t: number, mouse: { x: number; y: number }, cols: any, calm: number) {
        if (!o.w) { o.resize(); if (!o.w) return; }
        const A = useZ ? cols.za : cols.a;
        const B = useZ ? cols.zb : cols.b;
        const w = o.w, h = o.h, cx = w / 2, cy = h / 2;
        const R = Math.min(w, h) * o.rr;
        ctx.clearRect(0, 0, w, h);
        const rect = cv.getBoundingClientRect();
        const mx = mouse.x - (rect.left + cx), my = mouse.y - (rect.top + cy);
        const prox = Math.max(0, 1 - Math.hypot(mx, my) / (R * 2.8)) * calm;
        const mAng = Math.atan2(my, mx);
        ctx.lineCap = "round";
        ctx.lineWidth = 2.4;
        const N = o.n, TAU = Math.PI * 2;
        const baseA = comp.isLight && !useZ ? 0.5 : 0.32;
        const en = comp.energy || 0;
        for (let i = 0; i < N; i++) {
          const ang = (i / N) * TAU + t * 0.05;
          const Rw = R * (1 + 0.16 * Math.sin(ang * 2.3 + t * 0.5) + 0.09 * Math.sin(ang * 4.7 - t * 0.33) + en * 0.13);
          const wv = 0.55 * (0.5 + 0.5 * Math.sin(i * 0.63 + t * 1.6)) + 0.3 * (0.5 + 0.5 * Math.sin(i * 1.71 - t * 2.3)) + 0.15 * (0.5 + 0.5 * Math.sin(i * 0.19 + t * 0.8));
          let dA = Math.abs(ang - mAng) % TAU;
          if (dA > Math.PI) dA = TAU - dA;
          const g = Math.exp(-(dA * dA) / 0.405) * prox;
          const len = Rw * 0.1 + Rw * (0.36 + 0.3 * en) * wv * (0.55 + 0.45 * calm) + Rw * 0.5 * g;
          const ca = Math.cos(ang), sa = Math.sin(ang);
          const k = Math.min(1, wv * 0.8 + g);
          ctx.strokeStyle =
            "rgba(" + Math.round(A[0] + (B[0] - A[0]) * k) + "," + Math.round(A[1] + (B[1] - A[1]) * k) + "," + Math.round(A[2] + (B[2] - A[2]) * k) + "," + (baseA + 0.55 * k).toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(cx + ca * Rw * 0.82, cy + sa * Rw * 0.82);
          ctx.lineTo(cx + ca * (Rw + len), cy + sa * (Rw + len));
          ctx.stroke();
        }
        const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.85);
        gr.addColorStop(0, "rgba(" + B[0] + "," + B[1] + "," + B[2] + ",.14)");
        gr.addColorStop(0.55, "rgba(" + A[0] + "," + A[1] + "," + A[2] + ",.09)");
        gr.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(cx, cy, R * 0.85, 0, TAU); ctx.fill();
      },
    };
    o.resize();
    return o;
  }

  /* ---------- SOUND (synthesized, no assets) ---------- */
  makeAudio() {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    master.connect(comp);
    comp.connect(ctx.destination);
    // ambient pad — two detuned saws through a dark lowpass
    const padG = ctx.createGain(); padG.gain.value = 0.06; padG.connect(master);
    const padF = ctx.createBiquadFilter(); padF.type = "lowpass"; padF.frequency.value = 140; padF.connect(padG);
    const o1 = ctx.createOscillator(); o1.type = "sawtooth"; o1.frequency.value = 55;
    const o2 = ctx.createOscillator(); o2.type = "sawtooth"; o2.frequency.value = 55.6;
    const og = ctx.createGain(); og.gain.value = 0.22;
    o1.connect(og); o2.connect(og); og.connect(padF);
    o1.start(); o2.start();
    // air — looped noise through a bandpass
    const nbuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const nd = nbuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    const nsrc = ctx.createBufferSource(); nsrc.buffer = nbuf; nsrc.loop = true;
    const nf = ctx.createBiquadFilter(); nf.type = "bandpass"; nf.frequency.value = 320; nf.Q.value = 0.6;
    const ng = ctx.createGain(); ng.gain.value = 0.012;
    nsrc.connect(nf); nf.connect(ng); ng.connect(master);
    nsrc.start();
    const au: any = {
      on: false, _lt: 0,
      close() { try { ctx.close(); } catch (e) {} },
      setOn(v: boolean) {
        au.on = v;
        if (v && ctx.state === "suspended") ctx.resume();
        const t0 = ctx.currentTime;
        master.gain.cancelScheduledValues(t0);
        master.gain.setValueAtTime(master.gain.value, t0);
        master.gain.linearRampToValueAtTime(v ? 0.5 : 0, t0 + 0.6);
      },
      frame(e: number, energy: number) {
        const now = ctx.currentTime;
        padF.frequency.setTargetAtTime(140 + e * 700 + energy * 180, now, 0.09);
        ng.gain.setTargetAtTime(0.012 + e * 0.05 + energy * 0.028, now, 0.12);
        o1.frequency.setTargetAtTime(55 + e * 16, now, 0.12);
        o2.frequency.setTargetAtTime(55.6 + e * 16.4, now, 0.12);
      },
      blip(f: number, dur?: number, g?: number, type?: OscillatorType) {
        if (!au.on) return;
        const t0 = ctx.currentTime;
        const o = ctx.createOscillator(); o.type = type || "sine"; o.frequency.setValueAtTime(f, t0);
        const gn = ctx.createGain();
        gn.gain.setValueAtTime(g || 0.09, t0);
        gn.gain.exponentialRampToValueAtTime(0.0001, t0 + (dur || 0.07));
        o.connect(gn); gn.connect(master);
        o.start(t0); o.stop(t0 + (dur || 0.07) + 0.03);
      },
      type() {
        const n = performance.now();
        if (n - au._lt < 36) return;
        au._lt = n;
        au.blip(1800 + Math.random() * 800, 0.03, 0.035, "square");
      },
      tick(f?: number) { au.blip(f || 760, 0.07, 0.08, "sine"); },
      thock() { au.blip(150, 0.1, 0.18, "sine"); au.blip(78, 0.14, 0.14, "sine"); },
      whoosh() {
        if (!au.on) return;
        const t0 = ctx.currentTime;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.32, t0 + 0.12);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.7);
        const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 1.1;
        f.frequency.setValueAtTime(280, t0);
        f.frequency.exponentialRampToValueAtTime(2400, t0 + 0.5);
        const s = ctx.createBufferSource(); s.buffer = nbuf; s.loop = true;
        s.connect(f); f.connect(g); g.connect(master);
        s.start(t0); s.stop(t0 + 0.8);
      },
      chime() {
        if (!au.on) return;
        const t0 = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((f, i) => {
          const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f;
          const g = ctx.createGain();
          g.gain.setValueAtTime(0.0001, t0 + i * 0.06);
          g.gain.exponentialRampToValueAtTime(0.08, t0 + i * 0.06 + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.06 + 0.9);
          o.connect(g); g.connect(master);
          o.start(t0 + i * 0.06); o.stop(t0 + i * 0.06 + 1);
        });
      },
    };
    return au;
  }

  /* ---------- REDUCED MOTION ---------- */
  applyReduced() {
    if (this.wraps.app) this.wraps.app.style.height = "120vh";
    if (this.el.zcrisp) { this.el.zcrisp.style.opacity = "1"; this.el.zcrisp.style.pointerEvents = "auto"; }
    if (this.el.zq) this.el.zq.textContent = this.zQ;
    if (this.el.ztr) { this.el.ztr.textContent = this.zTR; this.el.ztr.style.opacity = "1"; }
    this.el.stages.forEach((s: HTMLElement, i: number) => { s.style.opacity = i === 3 ? "1" : "0"; });
    if (this.el.appMode) this.el.appMode.textContent = this.stModes[3];
    if (this.el.appClock) this.el.appClock.textContent = this.stClocks[3];
    this.el.stSteps.forEach((s: HTMLElement | null, i: number) => { if (s) s.style.color = i === 3 ? "var(--zacc)" : "#5d6a92"; });
    this.el.prs.forEach((el: HTMLElement) => { el.style.opacity = "1"; el.style.transform = "none"; });
    if (this.el.rcs) this.el.rcs.forEach((el: HTMLElement) => { el.style.opacity = el.getAttribute("data-dim") || "1"; el.style.transform = "none"; });
    if (this.el.rcFit) this.el.rcFit.textContent = "98";
    if (this.el.rcBtn) this.el.rcBtn.textContent = "SHORTLISTED ✓";
    if (this.el.rcMsg && this.rcM) this.el.rcMsg.textContent = this.rcM;
    if (this.el.arc) this.el.arc.style.strokeDashoffset = "150.8";
    if (this.el.score) this.el.score.textContent = "84";
    this.el.fills.forEach((f: HTMLElement) => { f.style.transform = "scaleX(" + +(f.getAttribute("data-t") || 0) / 100 + ")"; });
    this.el.nums.forEach((n: HTMLElement) => { n.textContent = n.getAttribute("data-t"); });
    if (this.el.band) { this.el.band.style.opacity = "1"; this.el.band.style.transform = "none"; }
    if (this.el.gap) { this.el.gap.style.opacity = "1"; this.el.gap.style.transform = "none"; }
    if (this.wraps.disc) this.wraps.disc.style.height = "auto";
    if (this.el.rail && this.el.rail.parentElement) {
      const par = this.el.rail.parentElement as HTMLElement;
      par.style.position = "relative";
      par.style.top = "auto";
      par.style.transform = "none";
      par.style.overflowX = "auto";
      par.style.padding = "40px 0";
    }
    if (this.wraps.noise) this.wraps.noise.style.height = "100vh";
  }
}

export default function SigEngine() {
  useEffect(() => {
    const root = document.getElementById("sigroot");
    if (!root) return;
    const rt = new SigRuntime(root);
    rt.mount();
    return () => rt.unmount();
  }, []);
  return null;
}
