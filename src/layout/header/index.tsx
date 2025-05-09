import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'
import { useState } from 'react'

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout.Header style={{ padding: 0, backgroundColor: colorBgContainer }}>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
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
