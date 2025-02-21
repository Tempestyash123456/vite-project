import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 3000,
    host: true,
    allowedHosts: [
      'vite-project-production-914f.up.railway.app',
      '*.up.railway.app'  // This will allow all railway.app subdomains
    ]
  },
  server: {
    host: true,
    port: process.env.PORT || 3000
  }
})