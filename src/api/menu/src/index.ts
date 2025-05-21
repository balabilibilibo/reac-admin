import { request } from '@/utils/http/index'

enum Api {
  GetMenuList = '/basic-api/menu/getMenuList'
}

export function getMenuList(params = {}) {
  return request<any[]>({
    url: Api.GetMenuList,
    params
  })
}
