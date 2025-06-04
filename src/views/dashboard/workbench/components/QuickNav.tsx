import { Card } from 'antd'
import { Icon } from '@iconify/react'
import { navItems } from './data'

export default function QuickNav() {
  return (
    <Card title="快捷导航">
      {navItems.map((item, index) => (
        <Card.Grid key={index}>
          <div className="jucent-center flex flex-col items-center">
            <Icon icon={item.icon} fontSize={30} color={item.color} />
            <span>{item.title}</span>
          </div>
        </Card.Grid>
      ))}
    </Card>
  )
}
