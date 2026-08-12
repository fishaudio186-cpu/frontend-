import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          plum: { DEFAULT: "#5C2033", light: "#7A2E45", dark: "#3D1525" },
          gold: { DEFAULT: "#C4A574", dark: "#A68B5B" },
          cream: { DEFAULT: "#F8F5F0", dark: "#EDE8DF" },
          trust: "#2D5A3D",
          rose: "#B76E79",
        },
      },
      fontFamily: {
        arabic: ["var(--font-tajawal)", "Tajawal", "Segoe UI", "sans-serif"],
        english: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        premium: "0 4px 24px rgba(92, 32, 51, 0.1)",
        card: "0 2px 16px rgba(92, 32, 51, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
