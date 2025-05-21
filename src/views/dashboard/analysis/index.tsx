import { request } from '@/utils/http/index'
import { Button } from 'antd'
import { useState } from 'react'
import { getMenuList } from '@/api/menu/index'
const Analysis: React.FC = () => {
  const [menList, setMenuList] = useState<any[]>([])
  const test = async () => {
    await request({
      url: '/basic-api/test'
    })
  }

  const getMenuListData = async () => {
    const { data: menuList } = await getMenuList()
    setMenuList(menuList)
  }
  return (
    <div>
      Analysis
      <div className="mt-2 flex gap-5">
        <Button type="primary" onClick={test}>
          测试token失效
        </Button>
        <Button type="primary" onClick={getMenuListData}>
          获取菜单
        </Button>
      </div>
      <div>{JSON.stringify(menList)}</div>
    </div>
  )
}

export default Analysis
