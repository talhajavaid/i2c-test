import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Conditionally load react-axe in development mode
  optimizeDeps: {
    include: ['react-axe'],
  },
  build: {
    chunkSizeWarningLimit: 2000, // Adjust as per your application needs
  },
});
