import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { Layout } from '../constant'

const Menu11 = lazy(() => import('@/views/menu/menu1/menu1-1'))
const Menu12 = lazy(() => import('@/views/menu/menu1/menu1-2'))
const Menu21 = lazy(() => import('@/views/menu/menu2/menu2-1'))
const Menu221 = lazy(() => import('@/views/menu/menu2/menu2-2/menu2-2-1'))
const ErrorBoundary = lazy(() => import('@/views/exception/ErrorBoundary'))

export const others: RouteObject = {
  element: Layout,
  ErrorBoundary: ErrorBoundary,
  children: [
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
    }
  ]
}
