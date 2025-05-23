import { RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import { Layout, ErrorBoundary } from '@/router/constant'
const Analysis = lazy(() => import('@/views/dashboard/analysis'))
const Workbench = lazy(() => import('@/views/dashboard/workbench'))

export const dashboard: RouteObject = {
  path: '/dashboard',
  element: Layout,
  ErrorBoundary: ErrorBoundary,
  children: [
    {
      index: true,
      element: <Navigate to="analysis" replace={true} />
    },
    {
      path: 'analysis',
      element: <Analysis />
    },
    {
      path: 'workbench',
      element: <Workbench />
    }
  ]
}
