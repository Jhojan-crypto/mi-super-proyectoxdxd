import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['abundant-tranquility-production.up.railway.app']
  },
  preview: {
    port: 5173,
    host: true,
    allowedHosts: ['abundant-tranquility-production.up.railway.app']
  }
})