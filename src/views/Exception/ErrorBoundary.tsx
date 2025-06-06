import { Button } from 'antd'
import { useNavigate, useRouteError } from 'react-router-dom'
import errorSrc from '@/assets/svg/error.svg'

const ErrorBoundary = () => {
  const error = useRouteError()
  console.log(
    'useRouteError 用于获取在ActionFunction、LoaderFunction 或组件渲染期间抛出的错误，用于路由模块的错误边界',
    error
  )
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/dashboard/analysis')
  }
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white text-[#1f1f1f] dark:bg-black dark:text-[#d9d9d9]">
      <img width={400} src={errorSrc} title="抱歉你访问的页面不存在哦" />
      <div className="mt-[-80px] text-center">
        <div className="text-2xl">500</div>
        <div className="my-5 text-black/45 dark:text-white/45">抱歉哦，系统故障，请联系管理员！</div>
        <Button type="primary" onClick={goHome}>
          返回首页
        </Button>
      </div>
    </div>
  )
}

export default ErrorBoundary
