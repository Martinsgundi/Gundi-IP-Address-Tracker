/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        vSm: '400px',
        midLg: '900px',
        lgXl: '1080px',
        lg2Xl: '1180px',
      },
      colors: {
        darkGray: "hsl(0, 0%, 59%)",
        veryDarkGray: "hsl(0, 0%, 17%)",
      },
      fontFamily: {
        Rubik: "Rubik"
      },
    },
  },
  plugins: [],
}
