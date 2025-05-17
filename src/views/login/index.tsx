import { useAppStore } from '@/store/app'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useTheme } from 'ahooks'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginBg from '../../assets/login.svg'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const { isDarkMode, updateDarkMode } = useAppStore()
  const { setThemeMode } = useTheme({
    localStorageKey: 'themeMode'
  })
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values)
    const { username } = values
    localStorage.setItem('react-token', 'react-token')
    await navigate('/dashboard/analysis')
    notification.success({
      message: '登录成功',
      description: `欢迎回来：${username}`
    })
  }

  const handleSwitchTheme = () => {
    const theme = isDarkMode ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark')
    document.documentElement.dataset.theme = theme
    setThemeMode(theme)
    updateDarkMode(isDarkMode ? false : true)
  }

  return (
    <div className="flex h-full dark:bg-[#1f1f1f] relative">
      {/* 左侧占位图 */}
      <div className="flex-1 bg-[#1677ff] dark:bg-[#1f1f1f] h-full flex justify-center items-center">
        <div className="flex flex-col  items-center">
          <img src={loginBg} alt="" className="w-2/5" />
          <div className="text-3xl font-bold tracking-widest  text-white mt-10">中后台管理系统</div>
          <div className="mt-4 text-white ">使用 React、React Router、Antd、Zustand 搭建的一个简易后台管理系统</div>
        </div>
      </div>
      {/* 右侧登录表单 */}
      <div className="flex-1 flex items-center h-full ">
        <div className="w-2/5 flex flex-col  ml-30">
          <h2 className="font-bold text-3xl mb-5 dark:text-white">欢迎登录</h2>
          <Form
            name="login"
            layout="vertical"
            initialValues={{
              username: 'admin',
              password: '123456',
              remember: true
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType> label={null} name="username" rules={[{ required: true, message: '请输入账号' }]}>
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType> label={null} name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button block type="primary" htmlType="submit" size="large">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* 切换主题 */}
      <div className="absolute right-4 top-4">
        <div
          className="w-[50px] h-[26px] px-[6px] rounded-[30px] cursor-pointer bg-[#151515] flex items-center justify-between dark:border border-[#c4bcbc]"
          onClick={handleSwitchTheme}
        >
          <div
            className={`absolute w-[18px] h-[18px] bg-white rounded-full will-change-transform transition-property-all transition-duration-500 transition-delay-100 ${isDarkMode ? 'translate-x-[calc(100%+2px)]' : null}`}
          ></div>
          <MoonOutlined className="text-white" />
          <SunOutlined className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Login
