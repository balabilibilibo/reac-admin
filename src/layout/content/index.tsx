import { Layout, theme, FloatButton } from 'antd'
import { Outlet } from 'react-router-dom'
import { Suspense, useRef } from 'react'
import { ProgressBar } from '@/components/ProgressBar'
const Content: React.FC = () => {
  const contnetRef = useRef<HTMLDivElement>(null)
  const {
    token: { borderRadiusLG }
  } = theme.useToken()
  return (
    <Layout.Content
      className="overflow-y-auto bg-[#f5f5f5] dark:bg-black"
      ref={contnetRef}
      style={{
        margin: 10,
        minHeight: 280,
        borderRadius: borderRadiusLG
      }}
    >
      <div className="relative h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ProgressBar />
          <Outlet />
        </Suspense>
        <FloatButton.BackTop visibilityHeight={100} target={() => contnetRef.current!} />
      </div>
    </Layout.Content>
  )
}

export default Content
