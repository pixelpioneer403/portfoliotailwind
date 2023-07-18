/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/svg/desktop_header.svg')",
      },
      fontFamily : {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      lineHeight: {
        'desktop-header': 1.5, // Custom leading value
      },
    },
  },
  plugins: [],
}
