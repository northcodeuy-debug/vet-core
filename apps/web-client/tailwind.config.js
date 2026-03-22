// app/vet-core/apps/web-client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vete: {
          bg: '#F1F7F4',
          primary: '#2D6A4F',
          dark: '#1B4332',
        }
      }
    },
  },
  plugins: [],
}


