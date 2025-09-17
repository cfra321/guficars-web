import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ⬅️ penting supaya path relative benar di production
  server: {
    allowedHosts: ["festivals-hygiene-departments-king.trycloudflare.com"],
  },
});
