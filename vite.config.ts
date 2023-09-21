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
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap'
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
  }
})
