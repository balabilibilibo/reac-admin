import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
export function useEcharts() {
  const elRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<echarts.ECharts>(null)
  function initCharts() {
    if (!elRef.current) return
    // 销毁之前的实例
    chartInstanceRef.current?.dispose()
    // 初始化实例
    chartInstanceRef.current = echarts.init(elRef.current)
  }

  function setOptions(options: echarts.EChartsOption) {
    if (!chartInstanceRef.current) {
      initCharts()
    }
    chartInstanceRef.current?.setOption(options)
  }

  function resize() {
    chartInstanceRef.current?.resize()
  }

  useEffect(() => {
    initCharts()

    window.addEventListener('resize', resize)
    return () => {
      chartInstanceRef.current?.dispose()
      chartInstanceRef.current = null
      window.removeEventListener('resize', resize)
    }
  }, [])

  return { elRef, getInstance: chartInstanceRef.current, setOptions }
}
