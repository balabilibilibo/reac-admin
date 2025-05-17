import { defineFakeRoute } from 'vite-plugin-fake-server'

export default defineFakeRoute([
  {
    url: '/mock/getToken',
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
  }
])
