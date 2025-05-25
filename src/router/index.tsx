import { createHashRouter, RouteObject, RouterProvider, Navigate } from 'react-router-dom'
import { basicRoutes } from './routes'
import { usePermissionStore } from '@/store/permission'
import { Layout, ErrorBoundary } from '@/router/constant'
import { PageEnum } from '@/enums/pageEnum'
import { dynamicRoute } from '@/router/utils'
import { cloneDeep } from 'lodash-es'

export const Router = () => {
  const { menuList } = usePermissionStore()
  const cloneRouteList = cloneDeep(menuList)
  const routeList = dynamicRoute(cloneRouteList)
  console.log('routeList', routeList)

  const ProtectedRoute: RouteObject = {
    path: '/',
    element: Layout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        element: <Navigate to={PageEnum.BASE_HOME} replace={true} />
      },
      ...routeList
    ]
  }

  const router = createHashRouter([...basicRoutes, ProtectedRoute])

  return <RouterProvider router={router} />
}
