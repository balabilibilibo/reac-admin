import { Layout } from 'antd'
import SiderMenu from '../menu'
import { useAppStore } from '@/store/app'
import { getGlobEnv } from '@/utils/env'
const Sider: React.FC = () => {
  const { title } = getGlobEnv()
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
      <div className={`h-12 cursor-pointer ${collapsed ? 'flex-center' : 'flex items-center pl-2.5'}`}>
        <img src="/icon.svg" alt="logo" className="h-8 w-8" />
        {!collapsed && <div className="ml-2 flex-shrink-0 truncate text-base font-bold text-white">{title}</div>}
      </div>
      <SiderMenu />
    </Layout.Sider>
  )
}

export default Sider
