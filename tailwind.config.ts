import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'scroll-smooth': 'scroll-smooth 40s linear infinite',
        'scroll-reverse': 'scroll-reverse 60s linear infinite',
        'scroll-celshade': 'scroll-celshade 50s linear infinite',
        'scroll-anime': 'scroll-anime 50s linear infinite',
      },
      keyframes: {
        'scroll-smooth': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 5 - 40px * 5))' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 6 - 40px * 6))' },
        },
        'scroll-celshade': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-280px * 8 - 32px * 8))' },
        },
        'scroll-anime': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-280px * 8 - 32px * 8))' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
