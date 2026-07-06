# Brio cinematic-asset workflow

A repeatable pipeline for adding AI-generated ambient visuals (image or video
loop) to this site. The code side is already built — `components/CinemaBackdrop.tsx`
renders any asset you produce, with motion, legibility scrims, and
accessibility handling included. You only supply the visual.

## What's already wired

- `CinemaBackdrop` sits as the deepest layer of the hero room (behind the
  starfield and laptop). It currently shows `public/cinema-poster.svg`, a
  procedural placeholder in the brand palette, animated with a slow Ken Burns
  drift (zoom + ambient pan — the same motion class an AI video loop gives).
- Drop in a real video and it upgrades itself: seamless muted loop,
  poster-first paint, pauses offscreen, skipped for reduced-motion and
  data-saver users, always under a token-matched scrim.
- The component is reusable — mount it in any scene that needs atmosphere
  (`#s-end` is the natural second candidate).

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
