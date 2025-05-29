// import { InfoCircleOutlined, DashboardOutlined, MenuOutlined, ExceptionOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from '@/store/app'
import { usePermissionStore } from '@/store/permission'
import { cloneDeep } from 'lodash-es'
import { Icon } from '@iconify/react'

interface MenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: MenuItem[]
  parentKeys?: string[]
}

function transformToMenu(routeList: any) {
  routeList = cloneDeep(routeList)
  function joinPath(routeList: any[], parentPath: string = '') {
    routeList.forEach((route: any) => {
      const { path, name, children, icon } = route
      const key = path ? (path.startsWith('/') ? path : `/${path}`) : ''
      route.key = parentPath + key
      route.label = name
      route.icon = renderIcon(icon)
      if (children && children.length) {
        joinPath(children, route.key || '')
      }
    })
  }
  joinPath(routeList)
  return routeList
}

/* function createIcon(name: string) {
  if (!name) return null
  const cutomIcons: { [key: string]: any } = Icons
  const icon = cutomIcons[name]
  if (!icon) return null
  return React.createElement(icon)
}
 */

function renderIcon(name: string) {
  if (!name) return null
  return React.createElement(Icon, { icon: name })
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

  // const items = [
  //   {
  //     key: '/dashboard',
  //     icon: <DashboardOutlined />,
  //     label: 'Dashboard',
  //     children: [
  //       {
  //         key: '/dashboard/analysis',
  //         label: '分析页'
  //       },
  //       {
  //         key: '/dashboard/workbench',
  //         label: '工作台'
  //       }
  //     ]
  //   },
  //   {
  //     key: '/menu',
  //     label: 'Menu',
  //     icon: <MenuOutlined />,
  //     children: [
  //       {
  //         key: '/menu/menu1',
  //         label: 'Menu1',
  //         children: [
  //           {
  //             key: '/menu/menu1/menu1-1',
  //             label: 'Menu1-1'
  //           },
  //           {
  //             key: '/menu/menu1/menu1-2',
  //             label: 'Menu1-2'
  //           }
  //         ]
  //       },
  //       {
  //         key: '/menu/menu2',
  //         label: 'Menu2',
  //         children: [
  //           {
  //             key: '/menu/menu2/menu2-1',
  //             label: 'Menu2-1'
  //           },
  //           {
  //             key: '/menu/menu2/menu2-2',
  //             label: 'Menu2-2',
  //             children: [
  //               {
  //                 key: '/menu/menu2/menu2-2/menu2-2-1',
  //                 label: 'Menu2-2-1'
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     key: '/exception',
  //     icon: <ExceptionOutlined />,
  //     label: '异常页',
  //     children: [
  //       {
  //         key: '/exception/403',
  //         label: '403'
  //       },
  //       {
  //         key: '/exception/404',
  //         label: '404'
  //       },
  //       {
  //         key: '/exception/500',
  //         label: '500'
  //       },
  //       {
  //         key: '/exception/net-work-error',
  //         label: '网络错误'
  //       },
  //       {
  //         key: '/exception/no-data',
  //         label: '无数据'
  //       }
  //     ]
  //   },
  //   {
  //     key: '/about',
  //     icon: <InfoCircleOutlined />,
  //     label: '关于'
  //   }
  // ]

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

  const handleClick = ({ key }: { key: string }) => {
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
