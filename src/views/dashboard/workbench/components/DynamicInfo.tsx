import { Card, List } from 'antd'
import { SvgIcon } from '@/components/Icon/SvgIcon'
import { dynamicInfoItems } from './data'

export default function DynamicInfo() {
  return (
    <Card
      className="mt-2.5"
      title="最新动态"
      extra={
        <a className="text-blue-500" href="#">
          更多
        </a>
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={dynamicInfoItems}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<SvgIcon icon={item.avatar} size={30} />}
              title={
                <div>
                  <span className="text-sm">{item.name}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.desc }}></span>
                </div>
              }
              description={item.date}
            />
          </List.Item>
        )}
      ></List>
    </Card>
  )
}
