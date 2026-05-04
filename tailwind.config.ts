import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        line: "hsl(var(--line))",
        subtle: "hsl(var(--subtle))",
        success: "hsl(var(--success))",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui"],
      },
      boxShadow: {
        pill: "0 10px 40px -10px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
