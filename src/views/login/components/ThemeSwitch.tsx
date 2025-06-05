import { useAppStore } from '@/store/app'
import { useTheme } from 'ahooks'
import { APP_THEME_KEY } from '@/enums/cacheEnum'
import { SvgIcon } from '@/components/Icon/SvgIcon'

const ThemeSwitch = () => {
  const { isDarkMode, updateDarkMode } = useAppStore()
  const { setThemeMode } = useTheme({
    localStorageKey: APP_THEME_KEY
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
        <SvgIcon icon="moon" size={14} />
        <SvgIcon icon="sun" size={14} />
      </div>
    </div>
  )
}

export default ThemeSwitch
