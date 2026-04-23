import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f7f7f7",
        paper: "#050505",
        muted: "#a3a3a3",
        line: "#2a2a2a",
        sage: "#ffffff",
      },
      boxShadow: {
        soft: "0 18px 44px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
