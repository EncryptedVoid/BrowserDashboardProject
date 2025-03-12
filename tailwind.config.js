/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          float: {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-6px)' },
            '100%': { transform: 'translateY(0px)' },
          }
        },
        animation: {
          float: 'float 3s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }