import { useAppStore } from '@/store/app'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import { useTheme } from 'ahooks'
const ThemeSwitch: React.FC = () => {
  const { isDarkMode, updateDarkMode } = useAppStore()
  const { setThemeMode } = useTheme({
    localStorageKey: 'themeMode'
  })
  const handleToogleMode = () => {
    updateDarkMode(isDarkMode ? false : true)
    setThemeMode(isDarkMode ? 'light' : 'dark')
    document.documentElement.classList.toggle('dark')
    document.documentElement.dataset.theme = isDarkMode ? 'light' : 'dark'
  }
  return (
    <div
      className="dark:hover-bg-white/10 flex h-8 w-8 cursor-pointer justify-center rounded px-3 hover:bg-black/5"
      onClick={handleToogleMode}
    >
      {isDarkMode ? <MoonOutlined /> : <SunOutlined />}
    </div>
  )
}

export default ThemeSwitch
