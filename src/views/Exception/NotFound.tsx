import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import notFoundSrc from '@/assets/404.svg'

const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/dashboard/analysis')
  }
  return (
    <div className='flex items-center justify-center h-full bg-white dark:bg-black flex flex-col'>
      <img width={400} src={notFoundSrc} title='抱歉你访问的页面不存在哦' />
      <div className='text-center mt-[-80px]'>
        <div className='text-2xl'>404</div>
        <div className='text-black/45 dark:text-white/45 my-5'>
          抱歉你访问的页面不存在哦
        </div>
        <Button type='primary' onClick={goHome}>
          返回首页
        </Button>
      </div>
    </div>
  )
}

export default NotFound
