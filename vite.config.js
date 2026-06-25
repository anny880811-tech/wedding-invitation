import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://wedding-invitation-self-beta.vercel.app/',
        changeOrigin: true,
      }
    }
  }
})