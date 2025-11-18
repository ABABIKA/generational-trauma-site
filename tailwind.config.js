/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        root: '#312718',
        cream: '#eccb9e',
        branch: '#694a2f',
        leaf: '#55613a',
        branchtwo: '#1f1a13',
        branchthree: '#2b1d0d'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        cursive: ['"Rouge Script"', 'cursive']
      }
    },
  },
  plugins: [],
}