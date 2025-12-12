import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/KnowNet/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboardP.html'),
        facultad: resolve(__dirname, 'facultad.html'),
        materias_basicas: resolve(__dirname, 'materias_basicas.html'),
        materias: resolve(__dirname, 'materias.html'),
        // mas páginas HTML aquí
      }
    }
  }
})