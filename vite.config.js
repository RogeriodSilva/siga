import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        // Apontando para o index.html na raiz do projeto
        popup: resolve(__dirname, "index.html"),
        background: resolve(__dirname, "src/background/background.js"),
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
