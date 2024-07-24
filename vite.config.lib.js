/* eslint-disable import/no-unused-modules */
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/dist/config.js';

const __dirname = import.meta.dirname;

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      cssCodeSplit: false,
      entry: resolve(__dirname, 'lib/your-library.js'),
      name: 'yourLibrary',
      formats: [
        'cjs',
        'es',
        'iife',
        'umd'
      ]
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'your-library.css';
          }
          if (assetInfo.name === 'your-library.umd.cjs') {
            return 'your-library.umd.js';
          }
          return assetInfo.name;
        },
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url)),
      '@@': fileURLToPath(new URL('./tests', import.meta.url)),
      '@@@': fileURLToPath(new URL('./docs', import.meta.url))
    }
  },
  test: {
    coverage: {
      exclude: [
        ...(configDefaults?.coverage?.exclude || []),
        '.eslintrc.cjs',
        '**/docs/',
        '**/site/',
        '**/scripts/'
      ],
      reportsDirectory: './tests/unit/coverage'
    },
    environment: 'happy-dom',
    globals: true,
    root: '.',
    setupFiles: [
      './tests/unit/setup.js'
    ]
  }
});
