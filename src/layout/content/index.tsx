import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ProgressBar } from '@/components/ProgressBar'
const Content: React.FC = () => {
  const {
    token: { borderRadiusLG }
  } = theme.useToken()
  return (
    <Layout.Content
      className="overflow-y-auto bg-[#f5f5f5] dark:bg-black"
      style={{
        margin: 10,
        minHeight: 280,
        borderRadius: borderRadiusLG
      }}
    >
      <div className="h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ProgressBar />
          <Outlet />
        </Suspense>
      </div>
    </Layout.Content>
  )
}

export default Content
