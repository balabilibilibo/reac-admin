import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
const Content: React.FC = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout.Content
      className='bg-[#f5f5f5] dark:bg-black overflow-y-auto'
      style={{
        margin: 10,
        minHeight: 280,
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
