import { usePermissionStore } from '@/store/permission'
import { transformToMenu } from '@/utils/menu'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Spin } from 'antd'
import './index.less'
function findNode(list: any[], target: string): any | null {
  for (const item of list) {
    if (item.path === target) {
      return item
    }
    if (item.children) {
      const foundInChildren = findNode(item.children, target)
      if (foundInChildren) {
        return foundInChildren
      }
    }
  }
  return null
}

export default function IFrame() {
  const [loading, setLoading] = useState(true)
  const { backMenuList } = usePermissionStore()
  const menuList = transformToMenu(backMenuList)
  const { pathname } = useLocation()
  const node = findNode(menuList, pathname)
  if (!node) return null
  return (
    <div className="iframe-page">
      <Spin spinning={loading} wrapperClassName="h-full">
        <iframe src={node.frameSrc} style={{ width: '100%', height: '100%' }} onLoad={() => setLoading(false)}></iframe>
      </Spin>
    </div>
  )
}
