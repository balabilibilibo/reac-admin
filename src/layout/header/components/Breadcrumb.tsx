import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { usePermissionStore } from '@/store/permission'
import { transformToMenu } from '@/utils/menu'

function findParentPath(menuList: any[], path: string): string[] {
  const parentPaths: string[] = []
  function traverseMenu(list: any[], targetPath: string) {
    for (const item of list) {
      if (item.path === targetPath) {
        parentPaths.push(item)
        return
      }
      const { children } = item

      if (children && children.length > 0) {
        const foundChild = children.find((child) => child.path === targetPath)
        if (foundChild) {
          parentPaths.push(item)
        }
        // 递归检查子级是否匹配
        traverseMenu(children, targetPath)
      }
    }
  }

  traverseMenu(menuList, path)
  return parentPaths
}
export default function Breadcrumb() {
  const { backMenuList } = usePermissionStore()
  const location = useLocation()
  const { pathname } = location
  const menuList = transformToMenu(backMenuList)
  const parentPath = findParentPath(menuList, pathname)
  const items = [...parentPath]
  return (
    <AntdBreadcrumb
      items={items.map((item) => ({
        title: item.name
      }))}
    />
  )
}
