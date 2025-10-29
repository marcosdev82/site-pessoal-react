import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Transpila recursos modernos para compatibilidade
    }),
  ],
  server: {
    // Para SPA com React Router v6, o ideal é redirecionar todas as rotas para index.html
    historyApiFallback: true,
  },
  build: {
    chunkSizeWarningLimit: 1500, // Evita warnings de chunks grandes
    rollupOptions: {
      output: {
        // Separar React e ReactDOM em outro chunk
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
