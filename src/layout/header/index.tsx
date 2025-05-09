import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
import { useAppStore } from '@/store/app'

const Header: React.FC = () => {
  const { collapsed, setCollapsed } = useAppStore()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout.Header style={{ padding: 0, backgroundColor: colorBgContainer }}>
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
    </Layout.Header>
  )
}

export default Header
