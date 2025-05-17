import { useAppStore } from '@/store/app'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useTheme } from 'ahooks'

const ThemeSwitch = () => {
  const { isDarkMode, updateDarkMode } = useAppStore()
  const { setThemeMode } = useTheme({
    localStorageKey: 'themeMode'
  })
  const handleSwitchTheme = () => {
    const theme = isDarkMode ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark')
    document.documentElement.dataset.theme = theme
    setThemeMode(theme)
    updateDarkMode(isDarkMode ? false : true)
  }
  return (
    <div className="absolute right-4 top-4">
      <div
        className="w-[50px] h-[26px] px-[6px] rounded-[30px] cursor-pointer bg-[#151515] flex items-center justify-between dark:border border-[#c4bcbc]"
        onClick={handleSwitchTheme}
      >
        <div
          className={`absolute w-[18px] h-[18px] bg-white rounded-full will-change-transform transition-property-all transition-duration-500 transition-delay-100 ${isDarkMode ? 'translate-x-[calc(100%+2px)]' : null}`}
        ></div>
        <MoonOutlined className="text-white" />
        <SunOutlined className="text-white" />
      </div>
    </div>
  )
}

export default ThemeSwitch
