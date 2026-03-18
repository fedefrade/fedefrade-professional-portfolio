import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * base: '/' — correct for custom domain (e.g. fedefrade.com).
 * GitHub Pages with a custom domain serves the site at the domain root.
 * If you ever need only github.io/username/repo (no custom domain), set base to '/repo-name/'.
 */
export default defineConfig({
  plugins: [react()],
  base: '/',
})
