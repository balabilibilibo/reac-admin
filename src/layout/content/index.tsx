import { Layout, theme } from 'antd'
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
      <div>Content</div>
    </Layout.Content>
  )
}

export default Content
