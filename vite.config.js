import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const base = process.env.BASE_PATH || '/Impostor/';

  return {
    plugins: [react()],
    base,
  };
});
