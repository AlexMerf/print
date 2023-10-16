import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      context: 'src/context',
      hooks: 'src/hooks',
      layouts: 'src/layouts',
      pages: 'src/pages',
      styles: 'src/styles',
      types: 'src/types',
      utils: 'src/utils',
    },
  },
});
