/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A64C2",
        "overlay": "#EEF2F6",
        "darkOverlay": "#676766",
        "background": "#A1B3B7"
      }
    },
  },
  plugins: [],
}
