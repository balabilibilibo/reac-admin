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
        className="flex h-[26px] w-[50px] cursor-pointer items-center justify-between rounded-[30px] border-[#c4bcbc] bg-[#151515] px-[6px] dark:border"
        onClick={handleSwitchTheme}
      >
        <div
          className={`transition-property-all transition-duration-500 transition-delay-100 absolute h-[18px] w-[18px] rounded-full bg-white will-change-transform ${isDarkMode ? 'translate-x-[calc(100%+2px)]' : null}`}
        ></div>
        <MoonOutlined className="text-white" />
        <SunOutlined className="text-white" />
      </div>
    </div>
  )
}

export default ThemeSwitch
