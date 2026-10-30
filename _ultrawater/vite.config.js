import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: true,
    sourcemap: false,
    outDir: fileURLToPath(new URL('../assets/ultra-water', import.meta.url)),
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(new URL('src/experience.js', import.meta.url)),
      formats: ['es'],
      fileName: () => 'ultra-ocean.js',
    },
    rollupOptions: {
      external: [],
      output: {
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
