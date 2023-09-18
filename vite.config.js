import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  "base": "/",
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
})
