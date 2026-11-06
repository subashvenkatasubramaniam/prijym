import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/prijym/',
  plugins: [react()],
  build: { assetsDir: 'bundle' },
});
