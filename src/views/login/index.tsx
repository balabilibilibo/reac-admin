import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginBg from '../../assets/login.svg'
import ThemeSwitch from './components/ThemeSwitch'
import { loginApi } from '@/api/user/index'

type FieldType = {
  username: string
  password: string
  remember?: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values)
    const { username, password } = values
    const res = await loginApi({ username, password })
    console.log('res', res)
    localStorage.setItem('react-token', res.data.token)
    await navigate('/dashboard/analysis')
    notification.success({
      message: '登录成功',
      description: `欢迎回来：${username}`
    })
  }

  return (
    <div className="relative flex h-full dark:bg-[#1f1f1f]">
      {/* 左侧占位图 */}
      <div className="flex h-full flex-1 items-center justify-center bg-[#1677ff] dark:bg-[#1f1f1f]">
        <div className="flex flex-col items-center">
          <img src={loginBg} alt="" className="w-2/5" />
          <div className="mt-10 text-3xl font-bold tracking-widest text-white">中后台管理系统</div>
          <div className="mt-4 text-white">使用 React、React Router、Antd、Zustand 搭建的一个简易后台管理系统</div>
        </div>
      </div>
      {/* 右侧登录表单 */}
      <div className="flex h-full flex-1 items-center">
        <div className="ml-30 flex w-2/5 flex-col">
          <h2 className="mb-5 text-3xl font-bold dark:text-white">欢迎登录</h2>
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
      <ThemeSwitch />
    </div>
  )
}

export default Login
