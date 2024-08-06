import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //host: '0.0.0.0',
    host: true, // Allow Vite to listen on all addresses, useful for Docker
    port: 5173,
    watch: {
      usePolling: true, // Needed for Docker
    },
  },
  plugins: [vue()],
})
