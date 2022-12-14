import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg'],
  plugins: [svelte()],
  optimizeDeps: {
    include: ["dayjs/plugin/relativeTime.js"],
  },
})
