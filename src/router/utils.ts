import { Layout } from '@/router/constant'
import { cloneDeep } from 'lodash-es'
import { lazy } from 'react'

const layoutMap = new Map<string, any>()
layoutMap.set('LAYOUT', Layout)
const EntryPath = '/src/views'

// 树形数据转成列表数据
export function treeToList<T = any>(tree: any): T {
  const children = 'children'
  const result: any = [...tree]
  for (let i = 0; i < result.length; i++) {
    if (!result[i][children!]) continue
    result.splice(i + 1, 0, ...result[i][children!])
  }
  return result
}

// 动态导入组件
function dynamicImport(component: string) {
  const viewModules = import.meta.glob('@/views/**/index.{tsx,jsx}', { eager: true })
  const keys = Object.keys(viewModules)
  const matchKeys = keys.filter((key) => {
    const k = key.replace(EntryPath, '')
    const mame = k.replace('.tsx', '').replace('.jsx', '')
    return mame == component
  })
  if (matchKeys.length == 1) {
    return () => Promise.resolve(viewModules[matchKeys[0]])
  } else if (matchKeys.length > 1) {
    console.warn('请不要在views文件夹下的相同层次目录中具创建有相同文件名的 jsx 或 tsx 文件，这将导致动态引入失败')
  } else {
    console.warn('在src/views/下找不到`' + component + '.jsx` 或 `' + component + '.tsx`, 请自行创建!')
  }
}

// 动态路由
export function dynamicRoute(routeList: any[]) {
  if (!routeList.length) return []
  routeList.forEach((route) => {
    const { component, children } = route
    if (component) {
      const layoutFound = layoutMap.get(component.toUpperCase())
      if (layoutFound) {
        route.Component = null
      } else {
        route.Component = lazy(dynamicImport(component) as any)
      }
    }
    children && dynamicRoute(children)
  })
  return routeList
}

export function transformToRoute(routeList: any[]) {
  routeList.forEach((route) => {
    const { component, children } = route
    if (component) {
      if (component.toUpperCase() === 'LAYOUT') {
        route.Component = null
      } else {
        route.children = [cloneDeep(route)]
        route.path = ''
        route.component = component
        route.Component = Layout
      }
    }
    children && dynamicRoute(children)
  })

  return routeList
}
