import {
  BookOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button, Layout, theme, Avatar, Dropdown, MenuProps, Modal } from 'antd'
import { useAppStore } from '@/store/app'
import avatar from '@/assets/avatar.gif'
import { useNavigate } from 'react-router-dom'

type MenuEvent = 'logout' | 'docs'
const { confirm } = Modal
const Header: React.FC = () => {
  const { collapsed, setCollapsed } = useAppStore()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const items: MenuProps['items'] = [
    {
      key: 'docs',
      icon: <BookOutlined />,
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://ant-design.antgroup.com/index-cn'
        >
          文档
        </a>
      ),
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: <span>退出系统</span>,
    },
  ]

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
      },
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
    <Layout.Header
      className='flex items-center justify-between'
      style={{ padding: 0, backgroundColor: colorBgContainer }}
    >
      <div>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={setCollapsed}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </div>
      <div className='mx-2.5 '>
        <Dropdown menu={{ items, onClick: handleMenuClick }}>
          <div className='cursor-pointer'>
            <Avatar size={30} src={avatar} />
            <span className='ml-2.5'>吧啦哔哩啵</span>
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default Header
