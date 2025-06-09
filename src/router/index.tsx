import { createHashRouter, RouteObject, RouterProvider, Navigate } from 'react-router-dom'
import { basicRoutes } from './routes'
import { usePermissionStore } from '@/store/permission'
import { Layout, ErrorBoundary } from '@/router/constant'
import { PageEnum } from '@/enums/pageEnum'
import { transformToRoute } from '@/utils/route/index'
import { cloneDeep } from 'lodash-es'
import { useMemo } from 'react'

function handleRedirect(routeList: RouteObject[]) {
  routeList = cloneDeep(routeList)
  const traversal = (routeList: RouteObject[]) => {
    for (const route of routeList) {
      const { children } = route
      if (children && children.length) {
        children.push({
          index: true,
          element: <Navigate to={children[0].path!} replace={true} />
        })
        traversal(children)
      }
    }
  }
  traversal(routeList)
  return routeList
}

export const Router = () => {
  const { backMenuList } = usePermissionStore()
  const routeList = useMemo(() => {
    const menuList = cloneDeep(backMenuList)
    const routes = transformToRoute(menuList)
    return handleRedirect(routes)
  }, [backMenuList])

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
