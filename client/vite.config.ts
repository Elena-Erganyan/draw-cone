import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.tsx",
      output: {
        entryFileNames: "assets/[name]_v1.js"
      },
    },
  },
  server: {
    proxy: { 
      "/api": "http://localhost:3000",
    },
  },
});
