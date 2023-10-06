/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tahiti: {
          searchInput: '#EFEFEF',
          searchInputText:'#929292'
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
