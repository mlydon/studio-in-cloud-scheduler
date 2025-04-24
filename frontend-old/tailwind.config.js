/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'studio-primary': '#2C3E50',
        'studio-secondary': '#3498DB',
      },
    },
  },
  plugins: [],
}
