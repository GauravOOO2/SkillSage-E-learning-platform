/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      fontFamily: {
        'inter': ['Inter'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
      },
      fontFamily: {
        'lato': ['Lato'],
      },
    },
  },
  plugins: [],
}