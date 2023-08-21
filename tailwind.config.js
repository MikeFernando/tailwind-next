/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 19.5rem) minmax(7.5rem, 32rem) 1fr',
      },
    },
  },
  plugins: [],
}
export default config
