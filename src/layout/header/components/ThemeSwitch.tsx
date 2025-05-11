import { useAppStore } from '@/store/app'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
const ThemeSwitch: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useAppStore()
  return (
    <div
      className='cursor-pointer h-8 w-8 px-3 flex justify-center hover:bg-white/10 rounded'
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <MoonOutlined /> : <SunOutlined />}
    </div>
  )
}

export default ThemeSwitch
