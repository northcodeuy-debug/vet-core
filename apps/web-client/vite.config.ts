// app/vet-core/apps/web-client/vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Esto es vital para dominios personalizados
})