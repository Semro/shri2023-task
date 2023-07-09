import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import PluginCritical from "rollup-plugin-critical";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PluginCritical.default({
      criticalUrl: "../index.html",
      criticalBase: "../",
      criticalPages: [{ uri: "", template: "index" }],
      criticalConfig: {
        inline: true,
      },
    }),
  ],
  build: {
    outDir: "../",
  },
  base: "/shri2023-task/",
});
