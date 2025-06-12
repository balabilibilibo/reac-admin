import { defineFakeRoute } from 'vite-plugin-fake-server/client'

const menuList = [
  {
    name: '概览',
    path: 'dashboard',
    icon: 'ion:grid-outline',
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
    name: '菜单',
    path: 'menu',
    icon: 'ant-design:menu-outlined',
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
    name: '异常页',
    path: 'exception',
    icon: 'ant-design:exception-outlined',
    component: 'Layout',
    children: [
      {
        name: '403',
        path: '403',
        icon: null
      },
      {
        name: '404',
        path: '404',
        icon: null
      },
      {
        name: '500',
        path: '500',
        icon: null
      },
      {
        name: '网络错误',
        path: 'net-work-error',
        icon: null
      },
      {
        name: '无数据',
        path: 'no-data',
        icon: null
      }
    ]
  },
  {
    name: '关于',
    path: 'about',
    icon: 'cib:about-me',
    component: 'Layout',
    hideChildrenInMenu: true,
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
