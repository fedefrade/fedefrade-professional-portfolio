import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages (repo fedefrade-professional-portfolio): assets under /fedefrade-professional-portfolio/
const repoBase = '/fedefrade-professional-portfolio/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? repoBase : '/',
}))
