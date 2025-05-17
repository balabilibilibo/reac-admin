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
      className="cursor-pointer h-8 w-8 px-3 flex justify-center dark:hover-bg-white/10  hover:bg-black/5 rounded"
      onClick={handleToogleMode}
    >
      {isDarkMode ? <MoonOutlined /> : <SunOutlined />}
    </div>
  )
}

export default ThemeSwitch
