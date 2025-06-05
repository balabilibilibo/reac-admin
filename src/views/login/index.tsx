import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginBg from '@/assets/svg/login.svg'
import ThemeSwitch from './components/ThemeSwitch'
import { getUserInfo, loginApi } from '@/api/user/index'
import { PageEnum } from '@/enums/pageEnum'
import { getMenuList } from '@/api/menu/index'
import { useUserStore } from '@/store/user'
import { usePermissionStore } from '@/store/permission'

type FieldType = {
  username: string
  password: string
  remember?: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { setToken, setUserInfo } = useUserStore()
  const { setBackMenuList } = usePermissionStore()
  const [loading, setLoading] = useState(false)

  const login = async (parmas: { username: string; password: string }) => {
    try {
      const { username, password } = parmas
      const { data } = await loginApi({ username, password })
      const { token } = data
      setToken(token)
      return afterLogin()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const afterLogin = async () => {
    const { data: userInfo } = await getUserInfo()
    setUserInfo(userInfo)
    const { data: menuList } = await getMenuList()
    setBackMenuList(menuList)
    await navigate(PageEnum.BASE_HOME, { replace: true })
    return userInfo
  }

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values)
    try {
      setLoading(true)
      const userInfo = await login(values)
      if (userInfo) {
        notification.success({
          message: '登录成功',
          description: `欢迎回来：${userInfo.name}`
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex h-full dark:bg-[#141414]">
      {/* 左侧占位图 */}
      <div className="flex h-full flex-1 items-center justify-center bg-[#1677ff] dark:bg-[#141414]">
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
              username: '吧啦哔哩啵',
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
              <Button block type="primary" htmlType="submit" size="large" loading={loading}>
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
