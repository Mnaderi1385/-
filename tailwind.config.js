module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: 0, transform: 'translateX(20px)', },
          '50%': { transform: 'translateX(-30px)', },
          '100%': { opacity: 1, },
        }
      },
      animation: {
        'show': 'show 2s linear',
      }
    },
  },
  plugins: [],
}
