import { createHashRouter, RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import { ExceptionEnum } from '@/enums/exceptionEnum'
/* import Login from '@/views/login'
import LayoutCon from '@/layout/index'
import AuthGuard from '@/router/AuthGuard'
import Analysis from '@/views/dashboard/analysis'
import Workbench from '@/views/dashboard/workbench'
import Menu11 from '@/views/menu/menu1/menu1-1'
import Menu12 from '@/views/menu/menu1/menu1-2'
import Menu21 from '@/views/menu/menu2/menu2-1'
import Menu221 from '@/views/menu/menu2/menu2-2/menu2-2-1'
import NotFound from '@/views/exception/NotFound'
import ErrorBoundary from '@/views/exception/ErrorBoundary'
import Exception from '@/views/exception/Exception' */
const Login = lazy(() => import('@/views/login'))
const LayoutCon = lazy(() => import('@/layout/index'))
const AuthGuard = lazy(() => import('@/router/AuthGuard'))
const Analysis = lazy(() => import('@/views/dashboard/analysis'))
const Workbench = lazy(() => import('@/views/dashboard/workbench'))
const Menu11 = lazy(() => import('@/views/menu/menu1/menu1-1'))
const Menu12 = lazy(() => import('@/views/menu/menu1/menu1-2'))
const Menu21 = lazy(() => import('@/views/menu/menu2/menu2-1'))
const Menu221 = lazy(() => import('@/views/menu/menu2/menu2-2/menu2-2-1'))
const ErrorBoundary = lazy(() => import('@/views/exception/ErrorBoundary'))
const Exception = lazy(() => import('@/views/exception/Exception'))
const NotFound = lazy(() => import('@/views/exception/NotFound'))

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
