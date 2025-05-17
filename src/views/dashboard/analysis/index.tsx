import { request } from '@/utils/http/index'
import { Button } from 'antd'
const Analysis: React.FC = () => {
  const test = async () => {
    await request({
      url: '/basic-api/test'
    })
  }
  return (
    <div>
      Analysis
      <Button type="primary" onClick={test}>
        测试token失效
      </Button>
    </div>
  )
}

export default Analysis
