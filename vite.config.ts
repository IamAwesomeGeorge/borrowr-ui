import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.tsx'],
      exclude: ['node_modules'],
      cache: false,      
      fix: true,         
    })],
})
