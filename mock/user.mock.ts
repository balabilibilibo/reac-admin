import { defineFakeRoute } from 'vite-plugin-fake-server'

export default defineFakeRoute([
  {
    url: '/basic-api/getToken',
    method: 'get',
    response: (req) => {
      const query = req.query
      if (query.username === 'admin' && query.password === '123456') {
        return {
          code: 200,
          data: {
            token: 'token'
          },
          msg: '登录成功！'
        }
      } else {
        return {
          code: 400,
          data: null,
          msg: '用户名或密码错误！'
        }
      }
    }
  },
  {
    url: '/basic-api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: 'admin',
          age: 18,
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
        },
        msg: '请求成功！'
      }
    }
  },
  {
    url: '/basic-api/test',
    method: 'get',
    statusCode: 401,
    response: () => {
      return {
        code: 200,
        data: null,
        msg: 'token 失效！'
      }
    }
  }
])
