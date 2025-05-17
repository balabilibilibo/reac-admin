import { Button } from 'antd'
import notFoundSvg from '@/assets/404.svg'
import errorSvg from '@/assets/error.svg'
import emptySvg from '@/assets/empty.svg'
import noPermSvg from '@/assets/403.svg'
import netWorkSvg from '@/assets/network.svg'
import { ReactNode, isValidElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExceptionEnum } from '@/enums/exceptionEnum'

interface MapValue {
  title?: string
  status?: ExceptionEnum
  subTitle?: string
  icon?: string
  btnText?: string
  isRefresh: boolean
}

const statusMap = new Map<ExceptionEnum, MapValue>()
const backHome = '返回首页'
const refresh = '刷新'

statusMap.set(ExceptionEnum.PAGE_NOT_ACCESS, {
  title: '403',
  status: ExceptionEnum.PAGE_NOT_FOUND,
  subTitle: '抱歉，您无权访问此页面。',
  icon: noPermSvg,
  btnText: backHome,
  isRefresh: false
})

statusMap.set(ExceptionEnum.PAGE_NOT_FOUND, {
  title: '404',
  status: ExceptionEnum.PAGE_NOT_FOUND,
  subTitle: '抱歉，您访问的页面不存在。',
  icon: notFoundSvg,
  btnText: backHome,
  isRefresh: false
})
statusMap.set(ExceptionEnum.ERROR, {
  title: '500',
  status: ExceptionEnum.ERROR,
  subTitle: '抱歉，服务器报告错误。',
  icon: errorSvg,
  btnText: backHome,
  isRefresh: false
})
statusMap.set(ExceptionEnum.PAGE_NOT_DATA, {
  title: '当前页无数据',
  status: ExceptionEnum.PAGE_NOT_DATA,
  subTitle: '',
  icon: emptySvg,
  btnText: refresh,
  isRefresh: true
})
statusMap.set(ExceptionEnum.NET_WORK_ERROR, {
  title: '网络错误',
  status: ExceptionEnum.NET_WORK_ERROR,
  subTitle: '抱歉，您的网络连接已断开，请检查您的网咯！',
  icon: netWorkSvg,
  btnText: refresh,
  isRefresh: true
})

interface Props {
  icon?: string | ReactNode
  title?: string
  status?: ExceptionEnum
  subTitle?: string
  btnText?: string
  handler?: () => void
}

const Exception = (props: Props) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/dashboard/analysis')
  }

  const refresh = () => {
    navigate(0)
  }

  const { title, subTitle, icon, btnText, isRefresh } = statusMap.get(props.status || 404)!
  const renderIcon = () => {
    if (props.icon) {
      return isValidElement(props) ? (
        props.icon
      ) : (
        <img width={400} src={props.icon as string} title={subTitle || props.subTitle} />
      )
    }
    if (icon) {
      return <img width={400} src={icon} title={subTitle || props.subTitle} />
    }
    return null
  }
  return (
    <div className="flex items-center justify-center h-full bg-white dark:bg-black flex-col">
      {renderIcon()}
      <div className="text-center mt-[-80px]">
        <div className="text-2xl">{props.title || title}</div>
        <div className="text-black/45 dark:text-white/45 my-5">{props.subTitle || subTitle}</div>
        <Button type="primary" onClick={isRefresh ? refresh : goHome}>
          {props.btnText || btnText}
        </Button>
      </div>
    </div>
  )
}

export default Exception
