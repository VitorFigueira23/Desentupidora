import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  root: "client", // <--- O SEGREDO: Dizemos que o código está aqui dentro
  build: {
    outDir: "../dist", // <--- E mandamos jogar o site pronto na raiz do projeto
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
})