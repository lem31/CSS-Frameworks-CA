import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles.scss";`,
      },
    },
  },
  appType: "mpa",
  base: "/CSS-Frameworks-CA/",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./feed/index.html"),
        auth: resolve(__dirname, "./index.html"),
        profile: resolve(__dirname, "./profile/index.html"),
      },
    },
  },
});
