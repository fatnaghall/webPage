import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = "/" في التطوير، و "/webPage/" فقط عند البناء للنشر على GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/webPage/' : '/',
  server: { port: 5173, open: true }
})
