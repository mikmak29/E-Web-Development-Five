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
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        accentColor: '#3EC290',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

