# Brio — marketing landing page

A pixel-faithful recreation of the Brio cinematic landing page, built with
**Next.js (App Router) + TypeScript + Tailwind CSS + Three.js**. Ported from the
design-handoff HTML prototype.

Brio is a voice-first interview platform that turns spoken, on-camera mock
interviews into a portable, verifiable readiness credential. This is the public
marketing site only — editorial and motion-forward (WebGL particle hero, a
pinned scroll-scrubbed "Forge" sequence, a scripted adaptive-interviewer demo, a
public-profile showcase, social proof, and a statistical "Proven Score"
section).

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3400
pnpm build      # production build
pnpm start      # serve the production build
```

## Architecture

- **`app/layout.tsx`** — fonts via `next/font/google` (Instrument Serif, Inter,
  JetBrains Mono), exposed as CSS variables (`--font-serif`, `--font-inter`,
  `--font-mono`).
- **`app/globals.css`** — design tokens, all `@keyframes`, the helper classes
  (`.serif`, `.mono`, `.btn-d`, `.pill`, `.panel`, `.tilt`, `.magnetic`, …), the
  grain overlay, and the responsive media queries. Inline section styles
  reference these global keyframes/classes by name, so they live here.
- **`app/page.tsx`** — assembles the root (`#lp-root`), the scroll-progress bar,
  every section, and the scroll engine.
- **`components/sections/*`** — one React Server Component per section
  (Nav, Hero, Forge, Marquee, Statement, AdaptiveDemo, Credential, Recruiters,
  Profile, ProofBento, ProvenScore, FinalCta, Footer). Pure markup; all motion
  is driven by the global engine via `data-*` attributes / classes.
- **`components/ScrollEngine.tsx`** — `"use client"`. A single scroll listener
  reads `window.scrollY` and imperatively writes transforms / opacity / width /
  `strokeDashoffset` / `textContent` for the scrubbed sequences (progress bar,
  statement scan, the 4-act pinned Forge, the credential fly-in, the closing
  word), plus count-ups (`IntersectionObserver`) and the magnetic / tilt pointer
  flourishes. Ported 1:1 from the prototype's scroll math.
- **`components/ParticleField.tsx`** — `"use client"`. A React port of the
  prototype's `<particle-field>` web component: a mouse-reactive Three.js point
  cloud (wave grid, light theme — violet → cyan → lime points on near-white).

## Faithfulness notes (kept from the prototype, intentional)

- **Reveals rest at `opacity:1`** and animate transform only — content is never
  hidden behind an animation; the page reads even if JS never runs.
- **`prefers-reduced-motion: reduce`** disables transforms/animations and lays
  the pinned sequences out statically with full values shown.
- The marketing page **never** shows the visitor a score, grade, or credential —
  the adaptive-interviewer beat returns at most a follow-up *question*.

## Stack

Next.js 14 · React 18 · TypeScript · Tailwind CSS 3 · Three.js · pnpm.
