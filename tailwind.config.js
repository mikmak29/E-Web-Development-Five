/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/*",
    "./src/*"
  ],
  theme: {
    extend: {
      screens: {
        mobileM: "375px",
        mobileL: "425px"
      },
      fontFamily: {

      },
    },
  },
  plugins: [],
}

