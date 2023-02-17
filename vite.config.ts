import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "@views": path.resolve(__dirname, "src/views"),
    "@components": path.resolve(__dirname, "src/components"),
    "@routes": path.resolve(__dirname, "src/routes"),
    "@layouts": path.resolve(__dirname, "src/layouts"),
    }}
});
