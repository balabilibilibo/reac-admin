import { InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SiderMenu: React.FC = () => {
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const location = useLocation()
  const { pathname } = location

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      children: [
        {
          key: 'analysis',
          label: '分析页',
        },
        {
          key: 'workbench',
          label: '工作台',
        },
      ],
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined />,
      label: '关于',
    },
  ]

  // 监听路由变化，设置选中的 key
  useEffect(() => {
    const keys = pathname.split('/').filter((item) => !!item)
    setSelectedKeys(keys.length > 1 ? [keys[1]] : [keys[0]])
  }, [pathname])

  const handleClick = (e: any) => {
    switch (e.key) {
      case 'analysis':
        navigate('/dashboard/analysis')
        break
      case 'workbench':
        navigate('/dashboard/workbench')
        break
      case 'about':
        navigate('/about')
        break
      default:
        break
    }
  }

  return (
    <Menu
      theme='dark'
      mode='inline'
      items={items}
      selectedKeys={selectedKeys}
      onClick={handleClick}
    />
  )
}

export default SiderMenu
