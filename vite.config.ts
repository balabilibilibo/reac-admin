import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { readPackageJSON } from 'pkg-types'
import UnoCSS from 'unocss/vite'
import { ConfigEnv, defineConfig, loadEnv, PluginOption, UserConfig } from 'vite'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html'

const root = process.cwd()
const pathResolve = (pathName: string) => {
  return path.resolve(root, '.', pathName)
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  const env = loadEnv(mode, root)
  const { VITE_APP_TITLE, VITE_USE_MOCK } = env
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
        enableProd: VITE_USE_MOCK == 'true',
        // 是否在控制台显示请求日志
        logger: true
      }),
      createSvgIconsPlugin({
        iconDirs: [pathResolve('src/assets/icons')],
        symbolId: 'icon-[name]'
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_APP_TITLE
          }
        }
      }) as PluginOption[]
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
