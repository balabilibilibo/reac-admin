import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { readPackageJSON } from 'pkg-types'
import UnoCSS from 'unocss/vite'
import { ConfigEnv, defineConfig } from 'vite'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'

const pathResolve = (pathName: string) => {
  return path.resolve(process.cwd(), '.', pathName)
}

// https://vite.dev/config/
export default defineConfig(async ({ command }: ConfigEnv) => {
  console.log('command', command)
  return {
    plugins: [
      react(),
      UnoCSS(),
      vitePluginFakeServer({
        // mock文件夹下的所有的 *.mock.ts 文件，都会被加载
        include: 'mock',
        infixName: 'mock',
        // 开发环境是否启用
        enableDev: true,
        // 生产环境是否启用
        enableProd: true,
        // 是否在控制台显示请求日志
        logger: true
      })
    ],
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
  }
})
