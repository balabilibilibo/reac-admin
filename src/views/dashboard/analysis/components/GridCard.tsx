import { Card, Tag } from 'antd'
import { growCardList } from '../data'
import { SvgIcon } from '@/components/Icon/SvgIcon'

export default function GridCard() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {growCardList.map((item, index) => (
        <Card
          key={index}
          size="small"
          className=""
          title={item.title}
          extra={<Tag color={item.color}>{item.action}</Tag>}
        >
          <div className="flex items-center justify-between p-2">
            <span className="text-lg">{item.value}</span>
            <SvgIcon icon={item.icon} size={40} />
          </div>
          <div className="flex justify-between p-2">
            <span>总{item.title}</span>
            <span>{item.total}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
