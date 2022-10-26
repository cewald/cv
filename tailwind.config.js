/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        cnt: '0 0 15px -5px rgb(0 0 0 / 0.1), 0 2px 10px -6px rgb(0 0 0 / 0.1)'
      }
    }
  }
}
