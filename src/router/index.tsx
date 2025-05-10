import { createHashRouter, RouteObject, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import LayoutCon from '@/layout/index'
import AuthGuard from '@/router/AuthGuard'
import Analysis from '@/views/dashboard/analysis'
import Workbench from '@/views/dashboard/workbench'
import About from '@/views/about'

const constRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login' replace={true} />,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/dashboard',
    element: <AuthGuard children={<LayoutCon />} />,
    children: [
      {
        path: 'analysis',
        element: <Analysis />,
      },
      {
        path: 'workbench',
        element: <Workbench />,
      },
    ],
  },
  {
    path: '/about',
    element: <AuthGuard children={<LayoutCon />} />,
    children: [
      {
        index: true,
        element: <About />,
      },
    ],
  },

  {
    path: '*',
    element: <div>404</div>,
  },
]

const router = createHashRouter(constRoutes)

export default router
