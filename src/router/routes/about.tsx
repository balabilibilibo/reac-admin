import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Layout } from '@/router/constant'

const About = lazy(() => import('@/views/about'))

export const about: RouteObject = {
  path: '/about',
  element: Layout,
  children: [
    {
      index: true,
      Component: About
    }
  ]
}
