import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ok
  server: {
    allowedHosts: ["festivals-hygiene-departments-king.trycloudflare.com"],
    historyApiFallback: true, // ← penting untuk dev agar mirip production
  },
});
