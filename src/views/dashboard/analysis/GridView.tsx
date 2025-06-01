import { Card } from './components/Card'
import { growCardList } from './data'

export default function GridView() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {growCardList.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}
