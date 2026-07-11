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
 *   - Cine mode (`cine="hero|noise|end"`): the media wrapper is stamped
 *     `data-cine` and the video `data-cine-vid`, handing motion authorship to
 *     SigEngine — scroll-directed dolly/parallax, rack focus, grade shifts,
 *     and velocity-reactive playback. The Ken Burns fallback is dropped so
 *     the engine is the only source of motion (and stills stay static for
 *     reduced-motion users). The wrapper is oversized 2% to absorb the
 *     room-light pointer drift without revealing edges; engine scale ≥ 1.
 *   - Always under a token-matched scrim so type stays legible.
 */
export default function CinemaBackdrop({
  video = null,
  video4k = null,
  poster,
  opacity = 0.5,
  scrim = true,
  cine = null,
}: {
  video?: string | null;
  video4k?: string | null;
  poster: string;
  opacity?: number;
  scrim?: boolean;
  cine?: string | null;
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
      <div
        data-cine={cine || undefined}
        style={{
          position: "absolute",
          inset: "-2%",
          willChange: cine ? "transform,filter,opacity" : undefined,
        }}
      >
        {src ? (
          <video
            ref={videoRef}
            data-cine-vid={cine || undefined}
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
            className={cine ? undefined : "kenburns"}
            style={{
              position: "absolute",
              inset: cine ? "0" : "-4%",
              backgroundImage: `url(${poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: String(opacity),
              willChange: cine ? undefined : "transform",
            }}
          />
        )}
      </div>
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
