import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import notFoundSrc from '@/assets/404.svg'

const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/dashboard/analysis')
  }
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white dark:bg-black">
      <img width={400} src={notFoundSrc} title="抱歉你访问的页面不存在哦" />
      <div className="mt-[-80px] text-center">
        <div className="text-2xl">404</div>
        <div className="my-5 text-black/45 dark:text-white/45">抱歉你访问的页面不存在哦</div>
        <Button type="primary" onClick={goHome}>
          返回首页
        </Button>
      </div>
    </div>
  )
}

export default NotFound
