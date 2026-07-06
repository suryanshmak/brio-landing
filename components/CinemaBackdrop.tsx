"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CinemaBackdrop — ambient animated background layer (the "AI video hero"
 * pattern, productionized).
 *
 * Drop-in workflow (see WORKFLOW.md):
 *   1. Generate a 16:9 visual with an image AI, save as /public/cinema-poster.jpg
 *   2. (Optional) Animate it into a seamless loop, save as /public/hero-loop.mp4
 *   3. Point VIDEO_SRC / POSTER_SRC below at the files.
 *
 * Behavior:
 *   - With a video: muted seamless loop, poster-first, pauses offscreen,
 *     skipped entirely for reduced-motion and data-saver users.
 *   - Poster only: slow Ken Burns drift (the same zoom/ambient motion an AI
 *     video loop gives, without the file weight or loop seam).
 *   - Always sits under an overlay gradient so design tokens stay legible.
 */
const VIDEO_SRC: string | null = null; // e.g. "/hero-loop.mp4" once generated
const POSTER_SRC = "/cinema-poster.svg"; // placeholder until an AI visual lands
const OPACITY = 0.5;

export default function CinemaBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    if (!VIDEO_SRC) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as any).connection?.saveData === true;
    if (reduce || saveData) return;
    setUseVideo(true);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !useVideo) return;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [useVideo]);

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none" }}
    >
      {useVideo && VIDEO_SRC ? (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: String(OPACITY),
          }}
        />
      ) : (
        <div
          className="kenburns"
          style={{
            position: "absolute",
            inset: "-6%",
            backgroundImage: `url(${POSTER_SRC})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: String(OPACITY),
            willChange: "transform",
          }}
        />
      )}
      {/* legibility scrim — keeps type and UI tokens readable over any visual */}
      <div
        style={{
          position: "absolute",
          inset: "0",
          background:
            "radial-gradient(120% 90% at 50% 40%,transparent 30%,var(--bgA) 92%),linear-gradient(180deg,rgba(4,7,15,.55),transparent 30%,transparent 62%,rgba(4,7,15,.7))",
        }}
      />
    </div>
  );
}
