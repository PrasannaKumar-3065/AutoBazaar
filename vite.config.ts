import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/AutoBazaar/',
  plugins: [react()],
  server: { 
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: {
      clientPort: 5000
    }
  },
  preview: {
    port: 5000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'public')
    }
  }
});
