import { Navigate, RouteObject } from 'react-router-dom'
import { ExceptionEnum } from '@/enums/exceptionEnum'
import { Exception } from '../constant'
import { lazy } from 'react'
import { PageEnum } from '@/enums/pageEnum'

const Login = lazy(() => import('@/views/login'))

export const PageNotFound: RouteObject = {
  path: '*',
  element: <Exception status={ExceptionEnum.PAGE_NOT_FOUND} />
}

export const LoginRoute: RouteObject = {
  path: '/login',
  element: <Login />
}

export const RootRoute: RouteObject = {
  path: '/',
  element: <Navigate to={PageEnum.BASE_HOME} replace={true} />
}
