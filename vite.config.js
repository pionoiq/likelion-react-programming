import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    /* src 파일의 경로 단축 설정 */
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
