import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { router } from '@/router'
import { PageEnum } from '@/enums/pageEnum'
import { TOKEN_KEY } from '@/enums/cacheEnum'

interface Result<T = any> {
  code: number
  msg: string
  data: T
}

const instance = axios.create({
  timeout: 10 * 1000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    console.error('请求失败', error?.message)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response: AxiosResponse<Result>) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data
    if (res.code != 200) {
      message.error(res.msg)
      return Promise.reject(res)
    } else {
      return response
    }
  },
  function (error: AxiosError<Result>) {
    // 对响应错误做点什么 // 超出 2xx 范围的状态码都会触发该函数。
    console.log('响应拦截错误', error)
    const { response, status } = error
    const msg = response?.data?.msg || ''
    let errMessage = ''
    switch (status) {
      case 400:
        errMessage = `${msg}`
        break
      case 401:
        errMessage = msg || '账号未授权!'
        localStorage.removeItem(TOKEN_KEY)
        router.navigate(PageEnum.BASE_LOGIN, { replace: true })
        break
      case 403:
        errMessage = '用户得到授权，但是访问是被禁止的!'
        break
      case 404:
        errMessage = '网络请求错误，未找到该资源!'
        break
      case 405:
        errMessage = '网络请求错误，请求方法未允许!'
        break
      case 408:
        errMessage = '网络请求超时!'
        break
      case 500:
        errMessage = '服务器错误，请联系管理员!'
        break
      case 501:
        errMessage = '网络未实现!'
        break
      case 502:
        errMessage = '网络错误!'
        break
      case 503:
        errMessage = '服务不可用，服务器暂时过载或维护!'
        break
      case 504:
        errMessage = '服务器无法连接!'
        break
      case 505:
        errMessage = 'HTTP版本不受支持!'
        break
      default:
    }
    message.error(errMessage)
    return Promise.reject(error)
  }
)

export const request = <T>(config: AxiosRequestConfig) => {
  return instance.request<Result<T>>(config).then((res) => res.data)
}
