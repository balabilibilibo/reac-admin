import { Layout, theme, FloatButton } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useRef } from 'react'
import { ProgressBar } from '@/components/ProgressBar'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const Content: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const {
    token: { borderRadiusLG }
  } = theme.useToken()
  const location = useLocation()
  const nodeRef = useRef(null)
  return (
    <Layout.Content
      className="overflow-y-auto bg-[#f5f5f5] dark:bg-black"
      ref={contentRef}
      style={{
        margin: 10,
        minHeight: 280,
        borderRadius: borderRadiusLG
      }}
    >
      <TransitionGroup className="h-full">
        <CSSTransition nodeRef={nodeRef} key={location.pathname} timeout={300} classNames="fade">
          <div ref={nodeRef} className="h-full">
            <Suspense fallback={<div>Loading...</div>}>
              <ProgressBar />
              <Outlet />
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <FloatButton.BackTop visibilityHeight={100} target={() => contentRef.current!} />
    </Layout.Content>
  )
}

export default Content
