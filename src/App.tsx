import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import router from './router'
import '@/styles/css/index.css'
import { useAppStore } from '@/store/app'

const { darkAlgorithm, defaultAlgorithm } = theme
const App = () => {
  const { isDarkMode } = useAppStore()
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        components: {
          Layout: {
            siderBg: '#141414',
          },
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default App
