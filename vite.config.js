import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Dev server: send /3d-calculator to /3d-calculator/ so it doesn't fall back to the main app
const calculatorRedirect = {
  name: 'calculator-redirect',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/3d-calculator') {
        res.writeHead(301, { Location: '/3d-calculator/' })
        return res.end()
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), calculatorRedirect],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        calculator: resolve(__dirname, '3d-calculator/index.html'),
      },
    },
  },
})
