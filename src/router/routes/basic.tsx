import { RouteObject } from 'react-router-dom'
import { ExceptionEnum } from '@/enums/exceptionEnum'
import { Exception } from '../constant'
import { lazy } from 'react'

const Login = lazy(() => import('@/views/login'))

export const PageNotFound: RouteObject = {
  path: '*',
  element: <Exception status={ExceptionEnum.PAGE_NOT_FOUND} />
}

export const LoginRoute: RouteObject = {
  path: '/login',
  element: <Login />
}
