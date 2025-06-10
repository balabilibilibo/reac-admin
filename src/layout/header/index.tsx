import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
import { useAppStore } from '@/store/app'
import UserDropDown from './components/UserDropDown'
import FullScreen from './components/FullScreen'
import ThemeSwitch from './components/ThemeSwitch'
import Breadcrumb from './components/Breadcrumb'
import MultiTabs from './components/MultiTabs'

const Header: React.FC = () => {
  const { collapsed, setCollapsed } = useAppStore()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <div>
      <Layout.Header
        className="flex items-center justify-between border-b dark:border-b-[#303030]"
        style={{ padding: 0, backgroundColor: colorBgContainer }}
      >
        <div className="flex items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={setCollapsed}
            style={{
              marginLeft: 15,
              fontSize: '16px',
              padding: '0 15px',
              width: 32,
              height: 32
            }}
          />
          <Breadcrumb />
        </div>
        <div className="mx-2.5 flex items-center">
          <ThemeSwitch />
          <FullScreen />
          <UserDropDown />
        </div>
      </Layout.Header>
      <MultiTabs style={{ backgroundColor: colorBgContainer }} />
    </div>
  )
}

export default Header
