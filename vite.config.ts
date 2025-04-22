import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/VizumTest/',
  resolve: {
    alias: {
      '@components': '/src/components/index.ts',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@ui': '/src/components/ui/index.ts',
    },
  },
})
