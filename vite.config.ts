import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import webfontDownload from 'vite-plugin-webfont-dl'
import svgLoader from 'vite-svg-loader'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv/',
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    webfontDownload(
      [
        'https://rsms.me/inter/inter.css',
        'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap'
      ],
      { injectAsStyleTag: false, minifyCss: true }
    ),
    Icons({})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  }
})
