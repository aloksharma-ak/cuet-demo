import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Accessible from your local network
    port: 5173,  // Default port, can be changed
  },
  build: {
    target: 'es2015',  // Ensure that Vite compiles for modern browsers
  },
  base: '/',
})
