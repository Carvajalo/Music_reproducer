/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        2:'2fr repeat(3, 1fr)'
      },
    },
  },
  plugins: [],
};
