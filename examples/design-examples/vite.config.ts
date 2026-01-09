import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    open: true,
    watch: {
      // 로컬 패키지의 변경사항도 감지하도록 설정
      ignored: ['!**/node_modules/@designbasekorea/**'],
    },
    // HMR 설정
    hmr: {
      overlay: true,
    },
  },
  // 로컬 패키지의 변경사항을 감지하기 위한 추가 설정
  optimizeDeps: {
    include: ['@designbasekorea/ui', '@designbasekorea/icons', '@designbasekorea/theme', '@designbasekorea/tokens'],
  },
});

