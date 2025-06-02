import { Card } from 'antd'
import { useState } from 'react'
import VisitAnalysis from './VisitAnalysis'
import VisitAnalysisBar from './VisitAnalysisBar'

const tabList = [
  {
    key: 'tab1',
    tab: '流量趋势'
  },
  {
    key: 'tab2',
    tab: '访问量'
  }
]

const contentList: Record<string, React.ReactNode> = {
  tab1: <VisitAnalysis />,
  tab2: <VisitAnalysisBar />
}

export default function SiteAnalysis() {
  const [activeTabKey, setActiveTabKey] = useState<string>('tab1')

  const onTabChange = (key: string) => {
    setActiveTabKey(key)
  }

  return (
    <div className="mt-2.5">
      <Card tabList={tabList} activeTabKey={activeTabKey} onTabChange={onTabChange}>
        {contentList[activeTabKey]}
      </Card>
    </div>
  )
}
