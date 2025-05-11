import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
import { useAppStore } from '@/store/app'
import UserDropDown from './components/UserDropDown'
import FullScreen from './components/FullScreen'
import ThemeSwitch from './components/ThemeSwitch'

const Header: React.FC = () => {
  const { collapsed, setCollapsed } = useAppStore()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout.Header
      className='flex items-center justify-between'
      style={{ padding: 0, backgroundColor: colorBgContainer }}
    >
      <div>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={setCollapsed}
          style={{
            marginLeft: 15,
            fontSize: '16px',
            padding: '0 15px',
            width: 32,
            height: 32,
          }}
        />
      </div>
      <div className='mx-2.5 flex items-center'>
        <ThemeSwitch />
        <FullScreen />
        <UserDropDown />
      </div>
    </Layout.Header>
  )
}

export default Header
