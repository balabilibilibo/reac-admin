import React from 'react'
import { cloneDeep } from 'lodash-es'
import { Icon } from '@iconify/react'
import { AppRouteModule } from '@/types/router'

export interface Menu {
  name: string
  icon: string
  path: string
  key: string
  children?: Menu[]
}

// 路径处理
export function joinParentPath(menuList: Menu[], parentPath: string = '') {
  menuList.forEach((menu) => {
    const { path, children } = menu
    menu.path = path.startsWith('/') ? path : `${parentPath}/${path}`
    children?.length && joinParentPath(children, menu.path)
  })
}

// 遍历树形数据
export function traverseTree<T = any>(treeData: T[], callback: (item: T) => void, childrenKey: string = 'children') {
  const data = cloneDeep(treeData)
  function traverse(treeData: T[]) {
    treeData.forEach((item) => {
      callback(item)
      const children = (item as Record<string, any>)[childrenKey]
      if (children && children.length > 0) {
        traverse(children)
      }
    })
  }
  traverse(data)
  return data
}

// 转换成菜单结构
export function transformToMenu(routeList: AppRouteModule[]) {
  const cloneRouteList: any[] = cloneDeep(routeList)
  joinParentPath(cloneRouteList)
  const menuList = traverseTree(cloneRouteList, (item) => {
    const { name, path, icon } = item
    item.key = path
    item.label = name
    item.icon = renderIcon(icon)
  })
  return menuList
}

// 渲染图标
export function renderIcon(name: string) {
  if (!name) return null
  return React.createElement(Icon, { icon: name })
}

// 查找父级
export function findParent(menuList: Menu[], targetPath: string, callback?: (item: any) => void): Menu[] {
  const list = [...menuList]
  const result: Menu[] = []
  function traversal(list: any[], res: any[] = []) {
    for (const item of list) {
      callback && callback(item)
      res.push(item)
      if (item.path === targetPath) {
        result.push(...res)
        return true
      }
      if (item.children && item.children.length) {
        const foundChildren = traversal(item.children, res)
        if (foundChildren) return true
      }
      res.pop()
    }
    return false
  }

  traversal(list)
  return result
}
