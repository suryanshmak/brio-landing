import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Brio logo as the apple-touch-icon (iOS applies its own rounded mask).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(circle at 32% 28%, #dff4ff, #2f80ff 62%, #0f3d8f)",
          color: "#ffffff",
          fontSize: 120,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        b
      </div>
    ),
    { ...size }
  );
}
