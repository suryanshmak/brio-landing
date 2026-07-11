"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CinemaBackdrop — ambient cinematic background layer.
 *
 * Generated via the Higgsfield pipeline in WORKFLOW.md (Nano Banana 2 4K still
 * → Veo 3.1 img2video with pinned end frame → Bytedance 4K upscale → ffmpeg
 * tail-into-head crossfade for a seamless loop).
 *
 * Behavior:
 *   - Video mode: seamless muted loop, poster-first paint, pauses offscreen,
 *     4K tier served to large/high-DPR screens, 1080p otherwise. Skipped
 *     entirely for reduced-motion and data-saver users (poster shows instead).
 *   - Still mode (no video prop): slow Ken Burns drift on the poster.
 *   - Always under a token-matched scrim so type stays legible.
 */
export default function CinemaBackdrop({
  video = null,
  video4k = null,
  poster,
  opacity = 0.5,
  scrim = true,
}: {
  video?: string | null;
  video4k?: string | null;
  poster: string;
  opacity?: number;
  scrim?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as any).connection?.saveData === true;
    if (reduce || saveData) return;
    // 4K tier for big or dense screens; 1080p covers the rest
    const wantsUltra =
      video4k &&
      (window.innerWidth >= 1600 ||
        (window.devicePixelRatio > 1.5 && window.innerWidth >= 1100));
    setSrc(wantsUltra ? video4k : video);
  }, [video, video4k]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src) return;
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
  }, [src]);

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none" }}
    >
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
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
            opacity: String(opacity),
          }}
        />
      ) : (
        <div
          className="kenburns"
          style={{
            position: "absolute",
            inset: "-6%",
            backgroundImage: `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: String(opacity),
            willChange: "transform",
          }}
        />
      )}
      {scrim && (
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(120% 90% at 50% 40%,transparent 30%,var(--bgA) 92%),linear-gradient(180deg,rgba(4,7,15,.55),transparent 30%,transparent 62%,rgba(4,7,15,.7))",
          }}
        />
      )}
    </div>
  );
}
