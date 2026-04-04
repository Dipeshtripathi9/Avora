/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240 5% 84%)",
        input: "hsl(240 5% 84%)",
        ring: "hsl(240 5% 64%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",
        primary: {
          DEFAULT: "hsl(240 5% 10%)",
          foreground: "hsl(0 0% 98%)",
        },
        gold: "hsl(40 72% 50%)",
        "gold-light": "hsl(42 55% 92%)",
      },
    },
  },
  plugins: [],
}