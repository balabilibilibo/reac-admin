import { createHashRouter, RouteObject, Navigate } from 'react-router-dom'
import { ExceptionEnum } from '@/enums/exceptionEnum'
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
    element: <Navigate to="/login" replace={true} />
  },
  {
    path: '/login',
    Component: Login
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
            element: <Analysis />
          },
          {
            path: 'workbench',
            element: <Workbench />
          }
        ]
      },
      {
        path: '/menu',
        children: [
          {
            path: 'menu1',
            children: [
              {
                path: 'menu1-1',
                element: <Menu11 />
              },
              {
                path: 'menu1-2',
                element: <Menu12 />
              }
            ]
          },
          {
            path: 'menu2',
            children: [
              {
                path: 'menu2-1',
                element: <Menu21 />
              },
              {
                path: 'menu2-2',
                children: [
                  {
                    path: 'menu2-2-1',
                    element: <Menu221 />
                  }
                ]
              }
            ]
          }
        ]
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
            element: <About />
          }
        ]
      },
      {
        path: 'exception',
        children: [
          {
            path: '403',
            element: <Exception status={ExceptionEnum.PAGE_NOT_ACCESS} />
          },
          {
            path: '404',
            element: <Exception status={ExceptionEnum.PAGE_NOT_FOUND} />
          },
          {
            path: '500',
            element: <Exception status={ExceptionEnum.ERROR} />
          },
          {
            path: 'net-work-error',
            element: <Exception status={ExceptionEnum.NET_WORK_ERROR} />
          },
          {
            path: 'no-data',
            element: <Exception status={ExceptionEnum.PAGE_NOT_DATA} />
          }
        ]
      },
      {
        children: [
          {
            path: '*',
            element: <NotFound />
          }
        ]
      }
    ]
  }
]

export const router = createHashRouter(constRoutes)
