/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fritz-regular': ['FritzRegular','Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens:{
        '1300px':'1300px',
        '1400px':'1400px',
        '1147px':'1147px',
        '720px':'720px',
        '830px':'830px',
      }
    },
  },
  plugins: [],
}