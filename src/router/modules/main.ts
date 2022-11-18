const routerList = [
  {
      path: '/',
      name: '/',
      meta:{
        title: '首页',
        icon: 'el-icon-s-home',
      },
      component: () => import('@/pages/home/home.vue')
  },
  {
      path: '/user',
      name: 'User',
      meta:{
          title: '用户',
          icon: 'el-icon-s-home',
          isShow: true,
      },
      component: () => import('@/pages/user/user.vue'),
      children:[
          {
              path: '/userA',
              name: 'UserA',
              meta:{
                  title: '用户A',
                  icon: 'el-icon-s-home',
                  isShow: true,
                },
              component: () => import('@/pages/aboutA/aboutA.vue')
          },
      ]
  },
  {
      path: '/about',
      name: 'About',
      meta:{
          title: '关于',
          icon: 'el-icon-s-home',
          isShow: true,
        },
      component: () => import('@/pages/about/about.vue')
  },
]

export default routerList