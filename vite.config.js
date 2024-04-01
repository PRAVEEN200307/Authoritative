import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Authoritative/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        signup: resolve(__dirname, "signup.html"),
        login: resolve(__dirname, "login.html"),
      },
    },
  },
});