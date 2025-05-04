/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-50%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-down': 'fade-down 1s ease-out forwards',
      },
      transform: ['group-hover'],
      colors: {
        primaryBg: '#3a2433',
        cardBg: '#1f121b',
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [],
}

