module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#f1f2f4',
          200: '#d8d9dc',
          // 200: '#a6a8b0',
          300: '#74768e',
          400: '#3f435c',
          500: '#090e16',
          600: '#080c13',
          700: '#060910',
          800: '#05070c',
          900: '#030509'
        }
      },
      animation: {
        slider: 'slider 25s linear infinite',
        stop: 'slider 25s linear infinite paused'
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 5))' }
        }
      }
    }
  },
  plugins: []
}
