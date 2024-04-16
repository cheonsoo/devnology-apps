import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
      // {
      //   find: "$components",
      //   replacement: path.resolve(__dirname, "src/components"),
      // },
    ]
  },
  optimizeDeps: { exclude: ['@devnology-apps/shared'] }
});
