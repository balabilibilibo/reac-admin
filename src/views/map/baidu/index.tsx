import { useCallback, useEffect, useRef } from 'react'

const BAI_DU_MAP_URL =
  'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=nq0oJemKMiINkxnco5VX5XUdOvrTiKOz&callback=initialize'

function wait(delay?: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, delay ?? 0)
  })
}
export default function BaiduMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const loadScript = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (window.BMapGL) return resolve(window.BMapGL)
      const script = document.createElement('script')
      script.src = BAI_DU_MAP_URL
      document.body.appendChild(script)
      script.onerror = reject
      window.initialize = () => resolve(window.BMapGL)
    })
  }, [])

  async function initMap() {
    await loadScript()
    await wait()
    const BMapGL = window.BMapGL
    // 创建Map实例
    const map = new BMapGL.Map(mapRef.current)
    // 创建点坐标
    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15)
    // 启用滚轮放大缩小
    map.enableScrollWheelZoom(true)
  }

  useEffect(() => {
    initMap()
  }, [])
  return <div ref={mapRef} className="h-full w-full" />
}
