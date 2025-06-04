import { Card } from 'antd'
import { Icon } from '@iconify/react'
import { groupItems } from './data'

export default function ProjectCard() {
  return (
    <Card title="项目">
      {groupItems.map((item, index) => (
        <Card.Grid key={index}>
          <div className="flex items-center">
            <Icon fontSize={30} color={item.color} icon={item.icon} />
            <span className="ml-4 text-lg">{item.title}</span>
          </div>
          <div className="my-4">{item.desc}</div>
          <div className="flex justify-between">
            <span>{item.group}</span>
            <span>{item.date}</span>
          </div>
        </Card.Grid>
      ))}
    </Card>
  )
}
