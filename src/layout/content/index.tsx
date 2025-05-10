import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
const Content: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout.Content
      style={{
        margin: 10,
        padding: 10,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <div>
        <Outlet />
      </div>
    </Layout.Content>
  )
}

export default Content
