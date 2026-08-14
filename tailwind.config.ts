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
          plum: { DEFAULT: "#4A1428", light: "#6B1F3A", dark: "#2E0C18" },
          gold: { DEFAULT: "#C9A56B", dark: "#A8874F", soft: "#E8D5B5" },
          cream: { DEFAULT: "#F6F3EF", dark: "#E7E1D8" },
          stone: "#EFEAE4",
          trust: "#1F4D38",
          rose: "#9B4D5C",
          ink: "#1A1214",
        },
      },
      fontFamily: {
        arabic: ["var(--font-cairo)", "Cairo", "Segoe UI", "sans-serif"],
        english: ["var(--font-outfit)", "Outfit", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px rgba(74, 20, 40, 0.12)",
        card: "0 8px 30px rgba(74, 20, 40, 0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "soft-rise": {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-in": "fade-in 1s ease-out both",
        "soft-rise": "soft-rise 1s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
