import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImporter from 'vite-plugin-importer';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    vitePluginImporter({
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
  ],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:7001',
        changeOrigin: true,
      }
    }
  }
});