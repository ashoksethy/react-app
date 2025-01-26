import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
server: {
        allowedHosts: [
            '.csb.app', // Allow all subdomains of CodeSandbox
        ],
    },
})
