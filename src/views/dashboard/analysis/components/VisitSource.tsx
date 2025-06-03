import { Card } from 'antd'
import { useEcharts } from '@/hooks/useEcharts'
import { useEffect } from 'react'
export default function VisitSource() {
  const { elRef, setOptions } = useEcharts()
  useEffect(() => {
    setOptions({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 0,
        left: 'center'
      },
      series: [
        {
          bottom: 20,
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' }
          ],
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 100
          }
        }
      ]
    })
  }, [])
  return (
    <Card title="访问来源">
      <div ref={elRef} style={{ height: '300px' }}></div>
    </Card>
  )
}
