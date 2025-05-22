import { request } from '@/utils/http/index'
import { LoginParams, UserInfo } from './model'

enum Api {
  GetToken = '/basic-api/getToken',
  GetUserInfo = '/basic-api/getUserInfo'
}

export function loginApi(params: LoginParams) {
  return request<{ token: string }>({
    url: Api.GetToken,
    params
  })
}

export function getUserInfo() {
  return request<UserInfo>({
    url: Api.GetUserInfo
  })
}
