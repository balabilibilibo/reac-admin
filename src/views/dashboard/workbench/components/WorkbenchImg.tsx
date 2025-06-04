import { Card } from 'antd'
import imgSrc from '@/assets/illustration.svg'

export default function WorkbenchImg() {
  return (
    <Card className="my-2.5">
      <img className="h-30 mx-auto" src={imgSrc} />
    </Card>
  )
}
