import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#111111",
        card: "#18181B",
        gold: {
          DEFAULT: "#EAB308",
          soft: "#F4CE4B",
          dim: "#8A6A0F",
        },
        cream: "#F5F5F5",
        foreground: "#FAFAFA",
        muted: "#A1A1AA",
        edge: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at center, rgba(234,179,8,0.12) 0%, rgba(234,179,8,0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
