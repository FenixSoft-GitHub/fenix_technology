import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin from 'vite-plugin-md'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react({
    include: [/\.tsx?$/, /\.md$/], // para que React compile también los MD
  }), mdPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  assetsInclude: ['**/*.md'], // evita errores al analizar contenido
});
