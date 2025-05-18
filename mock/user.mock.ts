import { defineFakeRoute } from 'vite-plugin-fake-server'

export default defineFakeRoute([
  {
    url: '/basic-api/getToken',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          token: 'token'
        },
        msg: '登录成功！'
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
