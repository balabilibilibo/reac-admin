import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import path from 'path'
import { readPackageJSON } from 'pkg-types'

const pathResolve = (pathName: string) => {
  return path.resolve(process.cwd(), '.', pathName)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  server: {
    host: true,
    open: true
  },
  resolve: {
    alias: [{ find: '@/', replacement: pathResolve('src') + '/' }]
  },
  define: {
    __APP_INFO__: {
      pkg: await readPackageJSON(pathResolve('package.json'))
    }
  }
})
