/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Source Code Pro", "monospace"],
      uls: ["Heebo", "sans-serif"],
      ulHeader: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
