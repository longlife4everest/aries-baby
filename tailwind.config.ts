
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const { fontFamily } = defaultTheme;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.7)",
          border: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      backgroundImage: {
        "gradient-soft-rose": "linear-gradient(135deg, #F8C8DC 0%, #E8A0BF 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} satisfies Config;
