import { Avatar, Dropdown, MenuProps, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { BookOutlined, LogoutOutlined } from '@ant-design/icons'

import avatar from '@/assets/avatar.gif'

type MenuEvent = 'logout' | 'docs'
const { confirm } = Modal

const items: MenuProps['items'] = [
  {
    key: 'docs',
    icon: <BookOutlined />,
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://ant-design.antgroup.com/index-cn">
        文档
      </a>
    )
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: <span>退出系统</span>
  }
]

const UserDropDown: React.FC = () => {
  const navigate = useNavigate()
  const logout = () => {
    confirm({
      title: '提示',
      content: '确认退出登录吗？',
      okText: '确认',
      cancelText: '取消',
      centered: true,
      onOk() {
        localStorage.removeItem('react-token')
        navigate('/login')
      }
    })
  }

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    switch (e.key as MenuEvent) {
      case 'logout':
        logout()
        break
    }
  }
  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }}>
      <div className="dark:hover-bg-white/10 box-content flex h-8 cursor-pointer items-center rounded px-3 py-1 hover:bg-black/5">
        <Avatar size={30} src={avatar} />
        <span className="ml-2.5">吧啦哔哩啵</span>
      </div>
    </Dropdown>
  )
}

export default UserDropDown
