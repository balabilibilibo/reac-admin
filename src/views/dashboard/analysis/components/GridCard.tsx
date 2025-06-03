import { Card, Statistic, StatisticProps, Tag } from 'antd'
import { growCardList } from '../data'
import { SvgIcon } from '@/components/Icon/SvgIcon'
import CountUp from 'react-countup'
const formatter: StatisticProps['formatter'] = (value) => <CountUp end={value as number} separator="," />
export default function GridCard() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {growCardList.map((item, index) => (
        <Card key={index} size="small" title={item.title} extra={<Tag color={item.color}>{item.action}</Tag>}>
          <div className="flex items-center justify-between p-2">
            <Statistic prefix="$" valueStyle={{ fontSize: '18px' }} value={item.value} formatter={formatter} />
            <SvgIcon icon={item.icon} size={40} />
          </div>
          <div className="flex justify-between p-2">
            <span>总{item.title}</span>
            <Statistic prefix="$" valueStyle={{ fontSize: '16px' }} value={item.total} formatter={formatter} />
          </div>
        </Card>
      ))}
    </div>
  )
}
