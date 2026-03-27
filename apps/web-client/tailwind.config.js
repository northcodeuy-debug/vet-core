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
          // Por lo que se es para el menu cartel de la web
          bg: '#F1F7F4',

          // Colores para la web
          primary: '#aaca50',    // Verde claro
          dark: '#1b4332',       // Verde oscuro (fondo)
          soft: '#D8E7DF',       // Fondo tarjetas
          accent: '#914122',     // Marrón footer        
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


