import { createHashRouter, RouteObject, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import AuthGuard from '@/router/AuthGuard'

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
    element: <AuthGuard children={<Dashboard />} />,
    children: [
      {
        path: 'analysis',
        element: <div>分页页</div>,
      },
      {
        path: 'workbench',
        element: <div>工作台</div>,
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
