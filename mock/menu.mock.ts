import { defineFakeRoute } from 'vite-plugin-fake-server'

const menuList = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: 'DashboardOutlined',
    component: 'Layout',
    children: [
      {
        name: '分析页',
        path: 'analysis',
        icon: null,
        component: '/dashboard/analysis/index'
      },
      {
        name: '工作台',
        path: 'workbench',
        icon: null,
        component: '/dashboard/workbench/index'
      }
    ]
  },
  {
    name: 'Menu',
    path: 'menu',
    icon: 'MenuOutlined',
    component: 'Layout',
    children: [
      {
        name: 'Menu1',
        path: 'menu1',
        icon: null,
        component: '',
        children: [
          {
            name: 'Menu1-1',
            path: 'menu1-1',
            icon: null,
            component: '/menu/menu1/menu1-1/index'
          },
          {
            name: 'Menu1-2',
            path: 'menu1-2',
            icon: null,
            component: '/menu/menu1/menu1-2/index'
          }
        ]
      },
      {
        name: 'Menu2',
        path: 'menu2',
        icon: null,
        component: '',
        children: [
          {
            name: 'Menu2-1',
            path: 'menu2-1',
            icon: null,
            component: '/menu/menu2/menu2-1/index'
          },
          {
            name: 'Menu2-2',
            path: 'menu2-2',
            icon: null,
            component: '',
            children: [
              {
                name: 'Menu2-2-1',
                path: 'menu2-2-1',
                icon: null,
                component: '/menu/menu2/menu2-2/menu2-2-1/index'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Me',
    path: 'about',
    icon: 'InfoCircleOutlined',
    component: 'Layout',
    children: [
      {
        name: '关于',
        path: 'index',
        icon: null,
        component: '/about/index'
      }
    ]
  }
]

export default defineFakeRoute([
  {
    url: '/basic-api/menu/getMenuList',
    method: 'get',
    response() {
      return {
        code: 200,
        data: menuList,
        msg: '请求成功！'
      }
    }
  }
])
