# Brio — marketing landing page

A cinematic, scroll-driven landing page for **Brio**, the voice-first interview
platform that turns spoken, on-camera mock interviews into a portable,
verifiable readiness credential. Built with **Next.js (App Router) +
TypeScript + Tailwind CSS**, ported pixel-faithfully from the v10 design
prototype and then polished.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3400
pnpm build      # production build
pnpm start      # serve the production build
```

## The experience

Six scenes, one continuous story:

1. **`#s-app` · The App (780vh)** — a room with a laptop; on scroll you
   dolly-zoom *through the glass* (letterbox bars, speed lines, flash, impact
   shake) into the app itself, then four pinned stages play out:
   **Interview** (typed question, webcam PiP, signal tags) → **Score**
   (readiness ring to 84, channel meters, pinned quotes, cross-session memory)
   → **Share** (public profile, rotating recruiter activity, copy-link) →
   **Discovered** (recruiter queue, FIT count-up, self-pressing SHORTLIST).
2. **`#s-noise`** — "Résumés say what you did / Brio shows what you can do"
   beam-scrub reveal; ghost documents get pushed aside.
3. **`#s-cred`** — the credential card: pointer tilt, sheen, scan line, and an
   iridescent holographic foil + glare that tracks the cursor.
4. **`#s-disc`** — horizontal shortlist rail, scroll-scrubbed with velocity skew.
5. **`#s-valid`** — published validity panel (N, CI, count-ups) with a
   cinematic wipe reveal.
6. **`#s-end`** — "Say it out loud." finale: starfield, orb, ripples, kinetic
   type.

## Architecture

- **`app/layout.tsx`** — fonts via `next/font` (Archivo *variable* with the
  `wdth` axis for kinetic type, Instrument Serif, JetBrains Mono), metadata,
  JSON-LD structured data.
- **`app/globals.css`** — the `#sigroot` design tokens (dark/light themes ×
  ice/lime/violet palettes), hover-state classes, holo foil/glare, responsive
  and reduced-motion rules.
- **`components/scenes/*`** — one React Server Component per scene. Pure
  markup with inline styles; all motion is driven through `data-*` hooks.
- **`components/SigEngine.tsx`** — the animation runtime (client). One rAF
  loop over a **lerped virtual scroll** drives: the dolly zoom, stage
  choreography, typing/scramble effects, starfields, the WebGL orb (with 2D
  canvas fallback), tilt + foil, magnetic buttons, count-ups, the nav
  hide-on-scroll-down / reveal-on-scroll-up behavior, the nav progress
  hairline, and the synthesized (opt-in) sound design.

## Behavior notes

- **Theme/palette** are switchable via data attributes on `#sigroot`
  (`data-theme="dark|light"`, `data-palette="ice|lime|violet"`,
  `data-type="grotesk|serif"`, `data-motion="full|calm"`, `data-grain`).
  Shipping defaults: dark · ice · grotesk · full · on.
- **Sound** is synthesized in WebAudio (no assets), off by default, toggled
  bottom-right, remembered in `localStorage("brio-sound")`.
- **Reduced motion** renders a complete static page: final values shown, the
  app section unpinned, the shortlist rail horizontally scrollable.
- **Honesty rule**: the page never gives the visitor a score, grade, or
  credential — the demo journey belongs to a fictional candidate.

## Stack

Next.js 14 · React 18 · TypeScript · Tailwind CSS 3 · pnpm. No animation
libraries — the engine is bespoke and dependency-free.
