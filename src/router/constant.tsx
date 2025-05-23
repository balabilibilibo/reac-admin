import { lazy } from 'react'
import AuthGuard from '@/router/guard/AuthGuard'
import LayoutCon from '@/layout'

export const ErrorBoundary = lazy(() => import('@/views/exception/ErrorBoundary'))

export const Exception = lazy(() => import('@/views/exception/Exception'))

export const Layout = <AuthGuard children={<LayoutCon />} />
