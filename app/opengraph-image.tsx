import { ImageResponse } from "next/og";

export const alt = "Brio — Prove you're ready, out loud.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card (Brio logo + headline on the dark violet field).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b0814",
          backgroundImage:
            "radial-gradient(circle at 82% -8%, rgba(124,58,237,0.55), transparent 55%), radial-gradient(circle at -8% 118%, rgba(201,242,77,0.16), transparent 55%)",
          color: "#f3efff",
          fontFamily: "sans-serif",
        }}
      >
        {/* logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 22,
              backgroundImage:
                "radial-gradient(circle at 33% 27%, #e6ddff, #7c3aed 60%, #3f1d80)",
              color: "#ffffff",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            b
          </div>
          <div style={{ fontSize: 50, fontWeight: 600, letterSpacing: -1 }}>
            Brio
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              letterSpacing: 5,
              color: "#c9f24d",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                backgroundColor: "#c9f24d",
                display: "flex",
              }}
            />
            VOICE-FIRST · VERIFIED
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 90,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.04,
            }}
          >
            <span>Prove you&#39;re ready,&nbsp;</span>
            <span style={{ color: "#9b7bf8" }}>out loud.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#b6b0cf", maxWidth: 860 }}>
            Real spoken interviews, scored on substance — a portable, verifiable
            readiness credential.
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#837da0",
            letterSpacing: 1,
          }}
        >
          Readiness, measured on substance.
        </div>
      </div>
    ),
    { ...size }
  );
}
