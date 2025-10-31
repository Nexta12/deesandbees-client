import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      // '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@routes': path.resolve(__dirname, './src/routes'), // Fix for @routes alias
      '@contexts': path.resolve(__dirname, './src/contexts'),

    },
  },
   preview: {
    port: 3308,
    allowedHosts: ['deesandbeesglobal.com']
  },
})
