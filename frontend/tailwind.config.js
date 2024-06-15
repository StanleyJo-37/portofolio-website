/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#0d0d0d",
      "secondary": "#c8c8c8",
      "background": "#27282d",
      "green": "#74c79d",
      "darker-green": "#4b8066",
      "white": "#fff",
    },
    extend: {},
  },
  plugins: [],
}