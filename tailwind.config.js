/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  keyframes: {
    "fade-in": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",   },
    },
  },
  animation: {    "fade-in": "fade-in 0.5s ease-in-out",
  },
}