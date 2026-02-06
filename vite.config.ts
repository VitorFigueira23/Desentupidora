import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Não precisamos mais definir 'root' nem 'outDir' complexos.
  // O padrão agora vai funcionar perfeitamente.
})