import { createHashRouter, RouteObject } from 'react-router-dom'
import Login from '@/views/login'

const constRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>首页</div>,
  },
  {
    path: '/login',
    // element: <Login />,
    Component: Login,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]

const router = createHashRouter(constRoutes)

export default router
