const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.85: '0.2rem',
        42: '11rem'
      },
      fontSize: {
        xxs: '0.6rem'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'gray-light': '#666666',
        'gray-base': '#1A1A1A',
        'gray-dark': '#262626'
      },
      flex: {
        fix: '0 0 auto'
      },
      boxShadow: {
        cnt: '0 0 15px -5px rgb(0 0 0 / 0.1), 0 2px 10px -6px rgb(0 0 0 / 0.1)'
      }
    }
  }
}
