/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['12px'],
      },
    },
    colors: {
      'Dark-Gray': "hsl(0, 0%, 63%)",
      Black: "hsl(0, 0%, 0%)",
      White: "hsl(0, 0%, 100%)",
      'Very-Dark-Gray': "hsl(0, 0%, 27%)",
    },
    screens:{
      sm: "375px",
      xl: "1440px",
    },
    fontFamily:{
      sans: ['spartan-500', 'sans-serif'],
      heading: ['spartan-700', 'sans-serif']
    }
  },
  plugins: [],
}
