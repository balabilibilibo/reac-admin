import { Card } from 'antd'
import { useEcharts } from '@/hooks/useEcharts'
import { useEffect } from 'react'
export default function VisitRadar() {
  const { elRef, setOptions } = useEcharts()
  useEffect(() => {
    setOptions({
      legend: {
        bottom: 0,
        data: ['访问', '购买']
      },
      tooltip: {},
      radar: {
        radius: '60%',
        splitNumber: 8,
        indicator: [
          {
            name: '电脑'
          },
          {
            name: '充电器'
          },
          {
            name: '耳机'
          },
          {
            name: '手机'
          },
          {
            name: 'Ipad'
          },
          {
            name: '耳机'
          }
        ]
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            shadowBlur: 0,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 1
          },
          data: [
            {
              value: [90, 50, 86, 40, 50, 20],
              name: '访问',
              itemStyle: {
                color: '#b6a2de'
              }
            },
            {
              value: [70, 75, 70, 76, 20, 85],
              name: '购买',
              itemStyle: {
                color: '#5ab1ef'
              }
            }
          ]
        }
      ]
    })
  }, [])
  return (
    <Card title="转化率">
      <div ref={elRef} style={{ height: '300px' }}></div>
    </Card>
  )
}
