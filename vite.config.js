import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Asegura que los assets carguen bien en producción
  build: {
    outDir: 'dist',  // Define la carpeta de salida correctamente
  },
});
