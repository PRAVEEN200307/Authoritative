import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ip_detective/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // greeting: resolve(__dirname, "greeting.html"),
      },
    },
  },
});