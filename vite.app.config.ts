import { defineConfig } from "vite";
import path from "path";
console.log(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@common": path.join(__dirname, "@apps/@common"),
    },
  },
  build: {
    cssCodeSplit: false,
  },
});
