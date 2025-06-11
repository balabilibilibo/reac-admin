import { ConfigProvider, theme } from 'antd'
import '@/styles/index.less'
import { useAppStore } from '@/store/app'
import { useTheme } from 'ahooks'
import { useEffect } from 'react'
import { APP_THEME_KEY } from '@/enums/cacheEnum'
import { Router } from '@/router'

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
      <Router />
    </ConfigProvider>
  )
}

export default App
