import React from 'react'
import { RouteObject } from 'react-router-dom'

interface RouteMeta {
  // 名字
  name?: string
  // 图表
  icon?: string
  // framew链接
  frameSrc?: URL
  // 排序
  orderNo?: number
  // 隐藏菜单
  hiddenMenu?: boolean
  // 隐藏子菜单
  hideChildrenInMenu?: boolean
}

interface AppRouteModule extends RouteObject {
  // 名字
  name?: string
  // 路由
  path?: string
  // 图标
  icon?: string
  // 组件路径
  component?: string
  // 组件
  Component?: React.ComponentType | null
  element?: React.ReactNode
  // 元数据
  meta?: RouteMeta
  // 索引路由
  index?: boolean
  // 子路由
  children?: AppRouteModule[]
}
