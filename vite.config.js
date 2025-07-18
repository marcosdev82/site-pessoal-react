import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👉 necessário para produção em cPanel
  plugins: [react()],
})