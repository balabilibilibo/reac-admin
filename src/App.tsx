import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import { router } from './router'
import '@/styles/index.less'
import { useAppStore } from '@/store/app'
import { useTheme } from 'ahooks'
import { useEffect } from 'react'
import { APP_THEME_KEY } from '@/enums/cacheEnum'

const { darkAlgorithm, defaultAlgorithm } = theme
const App = () => {
  const { isDarkMode, updateDarkMode } = useAppStore()
  const { theme } = useTheme({
    localStorageKey: APP_THEME_KEY
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
    updateDarkMode(theme === 'dark')
  }, [])

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        components: {
          Layout: {
            headerHeight: 48
          },
          Menu: {
            subMenuItemBg: '#141414'
          },
          Form: {},
          Descriptions: {
            titleMarginBottom: 10
          }
        }
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default App
