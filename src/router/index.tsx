import { createHashRouter, RouteObject, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import LayoutCon from '@/layout/index'
import AuthGuard from '@/router/AuthGuard'
import Analysis from '@/views/dashboard/analysis'
import Workbench from '@/views/dashboard/workbench'
import Menu11 from '@/views/menu/menu1/menu1-1'
import Menu12 from '@/views/menu/menu1/menu1-2'
import Menu21 from '@/views/menu/menu2/menu2-1'
import Menu221 from '@/views/menu/menu2/menu2-2/menu2-2-1'
import NotFound from '@/views/Exception/NotFound'

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
    path: '/menu',
    element: <AuthGuard children={<LayoutCon />} />,
    children: [
      {
        path: 'menu1',
        children: [
          {
            path: 'menu1-1',
            element: <Menu11 />,
          },
          {
            path: 'menu1-2',
            element: <Menu12 />,
          },
        ],
      },
      {
        path: 'menu2',
        children: [
          {
            path: 'menu2-1',
            element: <Menu21 />,
          },
          {
            path: 'menu2-2',
            children: [
              {
                path: 'menu2-2-1',
                element: <Menu221 />,
              },
            ],
          },
        ],
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
    element: <LayoutCon />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

const router = createHashRouter(constRoutes)

export default router
