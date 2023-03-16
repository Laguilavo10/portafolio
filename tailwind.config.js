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
          100: '#d8d9dc',
          200: '#a6a8b0',
          300: '#74768e',
          400: '#3f435c',
          500: '#090e16',
          600: '#080c13',
          700: '#060910',
          800: '#05070c',
          900: '#030509'
        },
        secondary: {
          50: '#f8f8fb',
          100: '#f0f0f5',
          200: '#d9d9e4',
          300: '#c1c1d3',
          400: '#9595af',
          500: '#31235e',
          600: '#2c1f54',
          700: '#22173e',
          800: '#1a1231',
          900: '#120c24'
        }
      },
      backgroundColor: {
        uwu:
          'linear-gradient(90deg,rgba(166,168,176,1),rgba(49,35,94,1))'
      }
    }
  },
  plugins: []
}
