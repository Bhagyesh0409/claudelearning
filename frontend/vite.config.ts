import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Phase 2: forward API calls to the backend during `npm run dev`.
    // proxy: { '/api': 'http://api:3000' },
  },
});
