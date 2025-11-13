import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // path modülünü import et
import { fileURLToPath } from 'url'; // ESM için __dirname'i almak için

// ESM'de __dirname'i manuel olarak hesaplıyoruz
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // KISAYOLLARI (ALIAS) BURADA TANIMLIYORUZ
  resolve: {
    alias: {
      // Senin "import '@src/main.scss'" komutun bunun sayesinde çalışacak
      '@': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),

      // İleride bunları da kullanmak isteyeceksin, hazır olsun
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});