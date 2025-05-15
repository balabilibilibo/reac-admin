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
import ErrorBoundary from '@/views/Exception/ErrorBoundary'
import Exception from '@/views/Exception/Exception'

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
    path: '',
    element: <AuthGuard children={<LayoutCon />} />,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: '/dashboard',
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
        children: [
          {
            index: true,
            // loader: async () => {
            //   //throw new Response('Not Found', { status: 404, statusText: 'Not Found' }); 可以返回Response对象
            //   //也可以返回json等等
            //   throw {
            //     message: 'Not Found',
            //     status: 404,
            //     statusText: 'Not Found',
            //     data: '132131',
            //   }
            // },
            element: <About />,
          },
        ],
      },
      {
        path: 'exception',
        element: <Exception />,
      },
      {
        children: [
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]

const router = createHashRouter(constRoutes)

export default router
