import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f5f4fb",
        fg: "#1a1626",
        muted: "#5b576f",
        "muted-2": "#8b88a1",
        line: "#e7e8f2",
        accent: "#7c3aed",
        "violet-deep": "#3f1d80",
        lime: "#c9f24d",
        "lime-dark": "#65a30d",
        cyan: "#0ea5e9",
        indigo: "#6366f1",
        amber: "#d97706",
        green: "#16a34a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
