import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Served from the root of https://quentinpn.github.io/
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
