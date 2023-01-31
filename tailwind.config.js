/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      container: {
        screens: {
          xs: '375px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',
          '2xl': '1140px',
        },
      },
      colors: {
        primary: '#03041C',
        secondary: '#525258',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        special: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
