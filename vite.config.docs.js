/* eslint-disable import/no-unused-modules */
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;

export default defineConfig({
  base: '/your-library',
  build: {
    outDir: resolve(__dirname, 'site'),
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        manualChunks: {
          nprogress: ['nprogress'],
          'vue-axe': ['vue-axe'],
          'vue-options-api-constants-plugin': ['vue-options-api-constants-plugin'],
          'vue-router': ['vue-router'],
          vue: ['vue']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['axe-core']
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url)),
      '@@': fileURLToPath(new URL('./tests', import.meta.url)),
      '@@@': fileURLToPath(new URL('./docs', import.meta.url))
    }
  },
  server: {
    open: '/index.html'
  }
});
