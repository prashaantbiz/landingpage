import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { accent: "#D3FE00", ink: "#080808" },
      fontFamily: { sans: ["Arial", "sans-serif"], display: ["Poppins", "Arial", "sans-serif"] },
      boxShadow: { glow: "0 0 55px rgba(200, 255, 0, .18)" },
    },
  },
  plugins: [],
};

export default config;
