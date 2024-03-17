import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/global.scss";`
      }
    },
  },
  base: '/url-shortening-api/',
  plugins: [react()],
})
