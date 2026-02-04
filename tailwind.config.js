/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'wine': {
          DEFAULT: '#710109',
          light: '#8a1a22',
          dark: '#5a0107',
        }
      }
    },
  },
  plugins: [],
}
