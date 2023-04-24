import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

const rootConfig = await import("../../vite.app.config");

// https://vitejs.dev/config/
export default mergeConfig(rootConfig.default, {
  server: {
    port: 3003,
  },
  plugins: [
    topLevelAwait(),
    react(),
    federation({
      name: "catalogue",
      filename: "remoteEntry.js",
      exposes: {
        "./Posts": "./src/Posts.tsx",
      },
      shared: ["react"],
    }),
  ],
});
