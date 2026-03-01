/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8B6E66',
        'primary-rose': '#8B6E66',
        'secondary': '#A59381',
        'secondary-beige': '#A59381',
        'bg-light': '#EFE7DF',
        'bg-soft': '#F5EEEC',
        'soft': '#EAE0D5',
        'text-dark': '#3E3A36',
      }
    },
  },
  plugins: [],
}
