import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      output: {
        // entryFileNames: 'assets/[name].js',
        // chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})
