import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
const rootConfig = await import("../../vite.app.config");

// https://vitejs.dev/config/
export default mergeConfig(rootConfig.default, {
  server: {
    port: 3001,
  },
  plugins: [
    topLevelAwait(),
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./Home": "./src/Home.tsx",
      },
      remotes: {
        "@apps/catalogue": "http://localhost:3002/assets/remoteEntry.js",
        "@apps/posts": "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
});
