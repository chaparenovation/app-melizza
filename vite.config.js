import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Asegura rutas relativas para Hostinger y Github Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Melizza: Objectif Code de la Route',
        short_name: 'Melizza Code',
        description: 'App para aprobar el examen de conducir en Francia',
        theme_color: '#0a0a1a',
        background_color: '#0a0a1a',
        display: 'standalone',
        icons: [
          {
            src: 'assets/rond_point_1775415206521.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/rond_point_1775415206521.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
