import { Tabs, TabsProps } from 'antd'
import { CSSProperties, useEffect, useMemo, useState } from 'react'
import { usePathname } from '@/hooks/usePathname'
import { usePermissionStore } from '@/store/permission'
import { transformToMenu } from '@/utils/menu'
import { useNavigate } from 'react-router-dom'

interface Props {
  style: CSSProperties
}

interface Tab {
  name: string
  path: string
  children?: any[]
}

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
export default function MultiTabs(props: Props) {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<string>('')
  const { style } = props
  const { backMenuList } = usePermissionStore()
  const menuList = transformToMenu(backMenuList)
  const pathname = usePathname()
  const navigate = useNavigate()

  const items = useMemo(() => {
    const closable = tabs.length > 1
    return tabs.map((item) => ({
      key: item?.path,
      label: item?.name,
      closable: closable
    }))
  }, [tabs])

  useEffect(() => {
    const node = findNode(menuList, pathname)
    if (!node) return
    setTabs((prev) => {
      const isExisted = prev.filter((item) => item.path == node?.path)
      if (!isExisted.length) {
        return [...prev, node]
      }
      return prev.filter((item) => !item?.children?.length)
    })

    setActiveTab(pathname)
  }, [pathname])

  const onTabClick = (key: string) => {
    if (key === activeTab) return
    navigate(key)
  }

  const onEdit: TabsProps['onEdit'] = (key, action) => {
    switch (action) {
      case 'add':
        break
      case 'remove': {
        if (tabs.length > 1) {
          const newTabs = tabs.filter((item) => item.path !== key)
          const tab = newTabs[newTabs.length - 1]
          setActiveTab(tab.path)
          navigate(tab.path)
          setTabs(newTabs)
        }
        break
      }
    }
  }

  return (
    <div className="pt-1" style={style}>
      <Tabs
        className="mx-1"
        type="editable-card"
        size="small"
        tabBarGutter={3}
        hideAdd
        style={{ marginBottom: 0 }}
        defaultActiveKey="1"
        activeKey={activeTab}
        items={items}
        onTabClick={onTabClick}
        onEdit={onEdit}
      />
    </div>
  )
}
