/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          900: '#0A1628',
          800: '#0F2040',
          700: '#152D55',
        },
        sun: {
          DEFAULT: '#F5A623',
          bright: '#FFD166',
          deep: '#E07B00',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],

  
}

