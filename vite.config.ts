import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react"; // Import React plugin

export default defineConfig({
  plugins: [vue(), react()],
  server: {
    allowedHosts: [
        '.csb.app', // Allow all subdomains of CodeSandbox
    ],
},
});
