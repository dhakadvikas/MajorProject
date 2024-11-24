import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  /* server: {
    proxy: {
      "/api": "https://4dvz5c-8000.csb.app",
    },
  },*/
  plugins: [react()],
});
