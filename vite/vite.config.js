import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import million from 'million/compiler';
import PluginCritical from "rollup-plugin-critical";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import VitePluginInjectPreload from "vite-plugin-inject-preload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({
      mode: "preact",
    }),
    preact(),
    ViteImageOptimizer(),
    VitePluginInjectPreload({
      files: [
        {
          match: /[a-zA-Z0-9]*.[webp|svg|png|jpg]$/,
        },
      ],
    }),
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
  alias: {
    react: "preact-compat",
    "react-dom": "preact-compat",
  },
});
