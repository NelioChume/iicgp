import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // Makes the dev server accessible to other devices on the same network
    port: 5173,          // Optional: specify the port (default is 5173)
    open: true           // Optional: automatically open in browser
  }
})
