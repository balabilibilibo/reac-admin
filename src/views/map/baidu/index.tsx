import { useRef, useEffect } from 'react'
import { useScript } from '@/hooks/useScript'

const BAI_DU_MAP_URL =
  'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=nq0oJemKMiINkxnco5VX5XUdOvrTiKOz&callback=initialize'

function nextTick(delay?: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay ?? 500)
  })
}

export default function BaiduMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const { toPromise } = useScript({ src: BAI_DU_MAP_URL })
  async function initMap() {
    await toPromise()
    await nextTick()
    const wrapEl = mapRef.current
    if (!wrapEl) return
    const BMapGL = window.BMapGL
    // 初始化地图
    const map = new BMapGL.Map(wrapEl)
    // 设置中心点坐标和地图级别
    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15)
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom()
  }

  useEffect(() => {
    initMap()
  }, [])

  return <div ref={mapRef} className="h-full w-full"></div>
}
