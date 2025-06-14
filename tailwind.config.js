/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#3B82F6',
        'brand-orange': '#F97316',
        'brand-green': '#10B981',
        'brand-gray': '#6B7280',
      },
    },
  },
  plugins: [],
}