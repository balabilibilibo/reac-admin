import { useEcharts } from '@/hooks/useEcharts'
import { useEffect } from 'react'

export default function VisitAnalysisBar() {
  const { elRef, setOptions } = useEcharts()
  useEffect(() => {
    setOptions({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            width: 1,
            color: '#019680'
          }
        }
      },
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      xAxis: {
        type: 'category',
        data: [...new Array(12)].map((_item, index) => `${index + 1}月`)
      },
      yAxis: {
        type: 'value',
        max: 8000,
        splitNumber: 4
      },
      series: [
        {
          data: [3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000, 3200, 4800],
          type: 'bar',
          barMaxWidth: 80
        }
      ]
    })
  }, [])
  return <div ref={elRef} style={{ width: '100%', height: '280px' }}></div>
}
