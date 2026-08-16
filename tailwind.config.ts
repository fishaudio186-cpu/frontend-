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
          // Primary brand wine, sampled from the logo and product packaging.
          // The legacy `forest` key is retained so existing components stay semantic.
          forest: { DEFAULT: "#58152C", light: "#74213F", dark: "#350A19" },
          // Gold is reserved for premium detail and dark-surface accents.
          gold: { DEFAULT: "#D0AD72", dark: "#B68B4B", deep: "#765625", soft: "#F0DFC2" },
          // Warm neutrals avoid the clinical white / muddy beige contrast.
          cream: { DEFAULT: "#FBF8F3", dark: "#EFE7DC" },
          stone: "#E6DACE",
          // Green appears only where the meaning is verified, safe, or successful.
          trust: "#236044",
          berry: "#861F42",
          ink: "#281A1F",
        },
      },
      fontFamily: {
        arabic: ["var(--font-cairo)", "Cairo", "Segoe UI", "sans-serif"],
        english: ["var(--font-outfit)", "Outfit", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px rgba(53, 10, 25, 0.16)",
        card: "0 8px 30px rgba(53, 10, 25, 0.08)",
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
