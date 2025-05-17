import { Layout } from 'antd'
import SiderMenu from '../menu'
import { useAppStore } from '@/store/app'
const Sider: React.FC = () => {
  const { isDarkMode } = useAppStore()
  const { collapsed } = useAppStore()
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={48}
      theme={isDarkMode ? 'light' : 'dark'}
    >
      <div
        className={`cursor-pointer h-12
            ${collapsed ? 'flex-center ' : ' flex items-center pl-2.5'}`}
      >
        <img src="/icon.svg" alt="logo" className="w-8 h-8" />
        {!collapsed && <div className="text-white text-base ml-2 font-bold truncate flex-shrink-0">React Admin</div>}
      </div>
      <SiderMenu />
    </Layout.Sider>
  )
}

export default Sider
