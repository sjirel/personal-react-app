import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import makerworld from './netlify/functions/makerworld.mjs'

// https://vitejs.dev/config/
// Dev server only:
// - send /3d-calculator to /3d-calculator/ so it doesn't fall back to the main app
// - serve /api/makerworld with the same handler Netlify runs in production
const calculatorDev = {
  name: 'calculator-dev',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/3d-calculator') {
        res.writeHead(301, { Location: '/3d-calculator/' })
        return res.end()
      }
      if (req.url.startsWith('/api/makerworld')) {
        const response = await makerworld(new Request('http://localhost' + req.url))
        res.writeHead(response.status, Object.fromEntries(response.headers))
        return res.end(await response.text())
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), calculatorDev],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        calculator: resolve(__dirname, '3d-calculator/index.html'),
      },
    },
  },
})
