/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        video: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.72%, rgba(0, 0, 0, 0.75) 104.14%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.26) 22.41%, rgba(0, 0, 0, 0.00) 34.48%);`,
        videoHover: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);"
      },
      screens: {
        xs: "480px"
      },
      width: {
        content: 1232
      },
      colors: {
        main: "#00d5bf",
        text: "#283344",
      }
    },
  },
  plugins: [],
}

