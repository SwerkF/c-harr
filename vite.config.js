import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/c-harr/', // Nom de votre repository GitHub
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
