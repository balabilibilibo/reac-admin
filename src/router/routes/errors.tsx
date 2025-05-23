import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { ExceptionEnum } from '@/enums/exceptionEnum'
import { Layout } from '../constant'

const Exception = lazy(() => import('@/views/exception/Exception'))

export const errors: RouteObject = {
  path: 'exception',
  element: Layout,
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
}
