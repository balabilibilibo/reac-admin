import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import loginBg from '../../assets/login.svg'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const Login: React.FC = () => {
  return (
    <div className='flex h-full'>
      {/* 左侧占位图 */}
      <div className='flex-1 bg-[#1677ff] h-full flex justify-center items-center'>
        <div className='flex flex-col  items-center'>
          <img src={loginBg} alt='' className='w-2/5' />
          <div className='text-3xl font-bold  tracking-widest  text-white mt-10'>
            中后台管理系统
          </div>
          <div className='mt-4 text-white '>
            使用 React、React Router、Antd、Zustand 搭建的一个简易后台管理系统
          </div>
        </div>
      </div>
      {/* 右侧登录表单 */}
      <div className='flex-1 flex items-center h-full '>
        <div className='w-2/5 flex flex-col  ml-30'>
          <h2 className='font-bold text-3xl mb-5'>欢迎登录</h2>
          <Form
            name='login'
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item<FieldType>
              label={null}
              name='username'
              rules={[{ required: true, message: '请输入账号' }]}
            >
              <Input size='large' />
            </Form.Item>

            <Form.Item<FieldType>
              label={null}
              name='password'
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password size='large' />
            </Form.Item>

            <Form.Item<FieldType>
              name='remember'
              valuePropName='checked'
              label={null}
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button block type='primary' htmlType='submit' size='large'>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
