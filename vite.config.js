import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/KnowNet/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboardP.html'),
        // mas páginas HTML aquí
      }
    }
  }
})