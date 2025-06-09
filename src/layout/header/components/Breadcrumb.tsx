import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { usePermissionStore } from '@/store/permission'
import { transformToMenu, findParent, Menu } from '@/utils/menu'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
function getBreadcrumbItems(menuList: Menu[]) {
  function traversal(list: Menu[]): any[] {
    return list.map((item) => {
      const hasChildren = item.children && item.children?.length > 0

      return {
        title: item.name,
        key: item.path,
        ...(hasChildren && {
          menu: {
            items: item.children?.map((child) => ({
              key: child.path,
              label: <Link to={child.path}>{child.name}</Link>
            }))
          }
        })
      }
    })
  }

  return traversal(menuList)
}
export default function Breadcrumb() {
  const { backMenuList } = usePermissionStore()
  const location = useLocation()
  const { pathname } = location
  const breadcrumbItems: any[] = useMemo(() => {
    const menuList = transformToMenu(backMenuList)
    const parent = findParent(menuList, pathname)
    return getBreadcrumbItems(parent)
  }, [backMenuList, pathname])
  return <AntdBreadcrumb items={breadcrumbItems} />
}
