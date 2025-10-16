import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/fullstack_react_spring_boot_frontend/',
  plugins: [react()],
})
