import React from 'react'
import { Navigate } from 'react-router-dom'
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('react-token')
  const isLogin = !!token
  // 未登录，重定向到登录页
  if (!isLogin) {
    return <Navigate to='/login' replace></Navigate>
  }
  // 已登录，渲染子组件
  return children
}

export default AuthGuard
