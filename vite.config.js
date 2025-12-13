import { defineConfig } from 'vite'
import { resolve } from 'path'
import { resourceLimits } from 'worker_threads'

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
        recursos: resolve(__dirname, 'recursos.html'),
        videos_cuv: resolve(__dirname, 'recursos_videos_cuv.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        perfil: resolve(__dirname, 'perfil.html'),
        // mas páginas HTML aquí
      }
    }
  }
})