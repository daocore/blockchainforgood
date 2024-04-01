/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        content: 1232
      },
      colors: {
        main: "#00d5bf"
      }
    },
  },
  plugins: [],
}

