import { useAppStore } from '@/store/app'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
const ThemeSwitch: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useAppStore()
  const handleToogleMode = () => {
    document.documentElement.classList.toggle('dark')
    document.documentElement.dataset.theme = isDarkMode ? 'light' : 'dark'
    toggleDarkMode()
  }
  return (
    <div
      className='cursor-pointer h-8 w-8 px-3 flex justify-center dark:hover-bg-white/10  hover:bg-black/5 rounded'
      onClick={handleToogleMode}
    >
      {isDarkMode ? <MoonOutlined /> : <SunOutlined />}
    </div>
  )
}

export default ThemeSwitch
