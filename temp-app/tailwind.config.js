/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-brand-(green|red|orange|brown|yellow|blue|sky)/,
      variants: ['hover', 'group-hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#529DD4',      // Custom Brand Blue
        'primary-rose': '#529DD4',
        'secondary': '#FACC15',
        'secondary-beige': '#FACC15',
        'bg-light': '#FFFFFF',
        'bg-soft': '#F8FAFC',
        'soft': '#E2E8F0',
        'text-dark': '#0F172A',
        'accent-red': '#EF4444',
        'accent-green': '#22C55E',
        // Exact SDG Logo Colors
        'brand-green': '#2D9A47',   // Deep vibrant green
        'brand-red': '#C5282F',     // Deep vibrant red
        'brand-orange': '#E56D24',  // Vibrant orange
        'brand-yellow': '#F0B823',  // Golden yellow
        'brand-blue': '#529DD4',    // Custom Brand Blue from user
        'brand-sky': '#349FCC',     // Light sky blue

      }
    },
  },
  plugins: [],
}
