import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brio",
    short_name: "Brio",
    description:
      "Brio runs real spoken interviews, scores the substance of your answers, and turns it into a portable, verifiable readiness credential.",
    start_url: "/",
    display: "standalone",
    background_color: "#04070f",
    theme_color: "#04070f",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
