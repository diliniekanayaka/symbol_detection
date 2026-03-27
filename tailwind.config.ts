import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#E5E7EB",
        background: "#FFFFFF",
        foreground: "#0A0A0A",
        muted: "#FAFAFA",
        "muted-foreground": "#6B7280",
      },
      borderRadius: {
        lg: "0.75rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(10,10,10,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
