import { request } from '@/utils/http/index'
import { LoginParams } from './model'

enum Api {
  GetToken = '/basic-api/getToken'
}

export function loginApi(params: LoginParams) {
  return request<{ token: string }>({
    url: Api.GetToken,
    params
  })
}
