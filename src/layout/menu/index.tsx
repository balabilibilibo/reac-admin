// import { InfoCircleOutlined, DashboardOutlined, MenuOutlined, ExceptionOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/app'
import { usePermissionStore } from '@/store/permission'
import { transformToMenu } from '@/utils/menu'
import { isHttpUrl } from '@/utils/is'

interface MenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: MenuItem[]
  parentKeys?: string[]
}

interface Menu {
  name: string
  icon: string
  path: string
  children?: Menu[]
}

const SiderMenu: React.FC = () => {
  const { isDarkMode } = useAppStore()
  const { backMenuList } = usePermissionStore()
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const location = useLocation()
  const { pathname } = location
  const menuList = useMemo(() => {
    return transformToMenu(backMenuList)
  }, [backMenuList])

  const findParentKeys = (nodes: MenuItem[], target: string) => {
    const parentKeys = new Set<any>()
    const list = [...nodes]
    while (list.length) {
      // 取出数组最后一个元素
      const node = list.pop()!

      // 如果是目标节点，则返回父节点的key
      if (node.key === target) {
        ;(node.parentKeys || []).forEach((item: any) => parentKeys.add(item))
      }

      // 如果当前节点有子节点，则将该子节点的父节点key添加到parentKeys中
      if (node.children) {
        const data = node.children.map((child: any) => ({
          ...child,
          parentKeys: [node.key, ...(node.parentKeys || [])]
        }))
        // 将子节点添加到list中，以便下一次循环
        list.push(...data)
      }
    }
    // 创建一个 Set，用于存储父节点的 key
    return Array.from(parentKeys)
  }

  // 监听路由变化，设置选中的 keys 和 展开的 keys
  useEffect(() => {
    setSelectedKeys([pathname])
    const parentKeys = findParentKeys(menuList, pathname)
    setOpenKeys(parentKeys)
  }, [pathname])

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    if (isHttpUrl(key)) {
      return window.open(key)
    }
    navigate(key.startsWith('/') ? key : `/${key}`)
  }

  const handleOpenChange = (keys: string[]) => {
    // 获取一级菜单的 keys
    const rootMenuKeys = []
    for (const item of menuList) {
      if (item.children && item.children.length > 0) {
        rootMenuKeys.push(item.key)
      }
    }
    // 获取最后一个展开菜单的 key
    const lastOpenKey = keys.find((key) => !openKeys.includes(key))
    // 如果不存在，则展开当前 keys
    if (!lastOpenKey) {
      setOpenKeys(keys)
    } else {
      // 最后一个  key 是否为一级菜单，是则展开
      if (rootMenuKeys.includes(lastOpenKey)) {
        setOpenKeys([lastOpenKey])
      } else {
        // 否则展开父级菜单
        const parentKeys = findParentKeys(menuList, lastOpenKey)
        setOpenKeys([...parentKeys, lastOpenKey])
      }
    }
  }

  return (
    <Menu
      theme={isDarkMode ? 'light' : 'dark'}
      mode="inline"
      items={menuList}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onSelect={handleClick}
      onOpenChange={handleOpenChange}
    />
  )
}

export default SiderMenu
