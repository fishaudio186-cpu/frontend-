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
          // Apothecary green carries the brand; the maroon pack shot reads as the hero against it
          forest: { DEFAULT: "#14452F", light: "#1E6145", dark: "#0B2A1D" },
          // `deep` is the only gold with enough contrast for small text on ivory
          gold: { DEFAULT: "#C9A56B", dark: "#A8874F", deep: "#8A6A34", soft: "#E8D5B5" },
          cream: { DEFAULT: "#FBF8F2", dark: "#F1EADC" },
          stone: "#EDE7DA",
          trust: "#14452F",
          // Echoes the packaging — reserved for price and offer accents
          berry: "#7A2437",
          ink: "#15211B",
        },
      },
      fontFamily: {
        arabic: ["var(--font-cairo)", "Cairo", "Segoe UI", "sans-serif"],
        english: ["var(--font-outfit)", "Outfit", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px rgba(11, 42, 29, 0.14)",
        card: "0 8px 30px rgba(11, 42, 29, 0.07)",
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
