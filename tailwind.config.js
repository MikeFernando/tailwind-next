/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 19.5rem) minmax(7.5rem, 32rem) 1fr',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
    },
  },
  plugins: [],
}
export default config
