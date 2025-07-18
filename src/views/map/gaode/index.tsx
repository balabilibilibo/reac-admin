import { useEffect, useRef } from 'react'
import { useScript } from '@/hooks/useScript'
import { nextTick } from '@/utils/tool'

const AMAP_URL = 'https://webapi.amap.com/maps?v=2.0&key=f774af5efc477ec6de65121c2142e99d'

export default function GaodeMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const { toPromise } = useScript({ src: AMAP_URL })

  async function initMap() {
    await toPromise()
    await nextTick()
    const wrapEl = mapRef.current
    if (!wrapEl) return
    const AMap: any = window.AMap
    new AMap.Map(wrapEl, {
      zoom: 15,
      center: [116.404, 39.915]
    })
  }

  useEffect(() => {
    initMap()
  }, [])

  return <div ref={mapRef} className="h-full w-full"></div>
}
