import { defineFakeRoute } from 'vite-plugin-fake-server'

const menuList = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: 'ion:settings-outline',
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
    icon: 'ion:settings-outline',
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
  }
  // {
  //   name: '异常页',
  //   path: 'exception',
  //   icon: '',
  //   component: '',
  //   children: [
  //     {
  //       name: '403',
  //       path: '403',
  //       icon: null,
  //       component: '/exception/403/index'
  //     },
  //     {
  //       name: '404',
  //       path: '404',
  //       icon: null,
  //       component: '/exception/404/index'
  //     },
  //     {
  //       name: '500',
  //       path: '500',
  //       icon: null,
  //       component: '/exception/500/index'
  //     },
  //     {
  //       name: '网络错误',
  //       path: 'net-work-error',
  //       icon: null,
  //       component: '/exception/net-work-error/index'
  //     },
  //     {
  //       name: '无数据',
  //       path: 'no-data',
  //       icon: null,
  //       component: '/exception/no-data/index'
  //     }
  //   ]
  // },
  // {
  //   name: '关于',
  //   path: 'about',
  //   icon: 'simple-icons:aboutdotme',
  //   component: '/about/index'
  // }
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
