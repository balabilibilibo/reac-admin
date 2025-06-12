import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useLocation } from 'react-router-dom'

NProgress.configure({ showSpinner: false, minimum: 0.1, trickleSpeed: 200 })

export const ProgressBar: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    NProgress.start()
    const timer = setTimeout(() => NProgress.done(), 300)
    return () => {
      clearTimeout(timer)
    }
  }, [pathname])
  return null
}
