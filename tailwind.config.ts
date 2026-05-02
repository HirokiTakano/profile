import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.22)",
        violetGlow: "0 0 30px rgba(167, 139, 250, 0.2)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
