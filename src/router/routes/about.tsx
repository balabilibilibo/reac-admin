import { lazy } from 'react'
import { Layout } from '@/router/constant'
import { AppRouteModule } from '@/types/router'

const About = lazy(() => import('@/views/about'))

export const about: AppRouteModule = {
  name: 'about',
  path: '/about',
  element: Layout,
  children: [
    {
      index: true,
      element: <About />
    }
  ]
}
