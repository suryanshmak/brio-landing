# Brio cinematic-asset workflow

A repeatable pipeline for adding AI-generated ambient visuals (image or video
loop) to this site. The code side is already built — `components/CinemaBackdrop.tsx`
renders any asset you produce, with motion, legibility scrims, and
accessibility handling included. You only supply the visual.

## What's live (generated 2026-07-11 via Higgsfield CLI)

- **Hero**: "The Listening Room" — Nano Banana 2 4K still → Veo 3.1 Lite
  img2video (8s, start & end frame pinned to the same still for a seamless
  loop) → Bytedance 4K upscale → ffmpeg tail-into-head crossfade. Served as
  `public/hero-loop-4k.mp4` (3840×2160, 3MB) on large/high-DPR screens and
  `public/hero-loop.mp4` (1080p, 1MB) otherwise, `cinema-poster.jpg` first.
- **Noise scene**: "Noise becomes Signal" 4K still (`noise-signal.jpg`) behind
  the beam-scrub statement.
- **Finale**: the Listening Room loop returns behind "Say it out loud." —
  same files as the hero (browser-cache hit), engine-lit on approach.
- `CinemaBackdrop` is parameterized (`video`, `video4k`, `poster`, `opacity`,
  `cine`) — mount it in any scene; it handles loop, offscreen pause,
  reduced-motion, data-saver, and the legibility scrim. Working files live in
  `.assets/` (gitignored); regenerate via the steps below.

## Scroll-directed cinematography (the `cine` prop)

Passing `cine="<key>"` hands motion authorship to SigEngine: the media wrapper
is stamped `data-cine="<key>"`, the video `data-cine-vid="<key>"`, and the Ken
Burns fallback is dropped (the engine is the only source of motion, so stills
stay static for reduced-motion users). Wired keys:

- **`hero`** — during the dolly-zoom the footage magnifies slower than the
  DOM world (multi-plane camera depth), racks out of focus (blur 0→9px,
  ≥900px viewports only) and dims as you punch through the laptop glass,
  and grades +22% saturation while the letterbox is in.
- **`noise`** — the backdrop enacts the thesis: blurred/desaturated/dim at
  rest, it develops to crisp full signal in lockstep with the beam scrub.
- **`end`** — reveal on approach: scales 1.14→1, brightens 0.5→1.05.
- **All videos** — playback rate follows scroll energy (1× at rest, up to
  ~2× while moving, eased both ways), and `#grain` opacity answers the same
  energy. New keys: mount `CinemaBackdrop cine="<key>"`, query
  `[data-cine="<key>"]` in `SigEngine.mount()`, drive it from a frame method.

## Producing an asset

### 1 · Reference
Collect one screenshot that captures the mood you want (design galleries,
other landings, film stills). The brand register: dark navy room, volumetric
blue/cyan light, one calm focal glow, no text in frame.

### 2 · Generate the still (any image AI)
Prompt template tuned to this site — paste alongside your reference image:

> Cinematic dark studio environment, deep navy blue (#04070f) background,
> volumetric light in electric blue (#4f80ff) and ice cyan (#5ee1ff), a single
> soft glowing orb of light floating center-left, subtle atmospheric haze,
> faint dust particles, photoreal 3D render, shallow depth of field, no text,
> no people, no UI, 16:9

Export the best result as JPG/PNG at 1920×1080 or larger.

### 3 · Animate it (any image-to-video AI, optional)
- Motion: ambient drift or slow push-in only — no camera cuts, no subject motion
- Length: 5–10s, **seamless loop enabled**
- Export MP4 (H.264), then compress: `ffmpeg -i in.mp4 -crf 28 -an hero-loop.mp4`
  (target < 3 MB; it's a background, not a film)

If you skip this step, the still alone is enough — the Ken Burns fallback
supplies the motion.

### 4 · Drop it in
```
public/cinema-poster.jpg   ← your still (also used as the video poster)
public/hero-loop.mp4       ← your loop (optional)
```
Then in `components/CinemaBackdrop.tsx` set:
```ts
const VIDEO_SRC = "/hero-loop.mp4";      // or keep null for still + Ken Burns
const POSTER_SRC = "/cinema-poster.jpg";
```
Tune `OPACITY` (0.35–0.65) until the laptop and headline still lead the frame.

### 5 · Polish checklist
- Headline contrast intact over the brightest region of the visual
- The orb (the listening entity) still reads as the focal point
- Mobile: check 375px — the scrim handles most of it
- `pnpm build` passes

### 6 · Deploy
```
vercel login          # one-time
vercel --prod         # from the repo root
```
Or connect the GitHub repo (suryanshmak/brio-landing) in the Vercel dashboard
for deploy-on-push.
