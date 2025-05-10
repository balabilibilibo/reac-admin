import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
import { useAppStore } from '@/store/app'
import UserDropDown from './components/UserDropDown'

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
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </div>
      <div className='mx-2.5 '>
        <UserDropDown />
      </div>
    </Layout.Header>
  )
}

export default Header
