import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  // Define explicitamente onde está o index.html (pasta client)
  root: path.resolve(__dirname, "client"),
  build: {
    // Define explicitamente para salvar na raiz do projeto (fora da pasta client)
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
})