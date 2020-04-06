import Layout from '../views/Layout.vue'
export default [
  {
    path: '/',
    redirect: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue')
      }
    ]
    // 路由独享的守卫
    // beforeEnter: (to, from, next) => {
    //   if (to.path === '/about') {
    //     console.log('从about页面来')
    //   }else {
    //     console.log('不是从about页面来')
    //   }
    //   next()
    // }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () =>  import('../views/router/login.vue')
  },
  {
    path: '/todoList',
    component: () => import('../views/TodoList.vue')
  },
  {
    path: '/nextTick',
    component: () => import('../views/NextTick.vue')
  },
  {
    path: '/condition',
    component: () => import('../views/Condition.vue')
  },
  {
    path: '/list',
    component: () => import('../views/ListDemo.vue')
  },
  {
    path: '/vModel',
    component: () => import('../views/primary/Vmodel.vue')
  },
  {
    path: '/argu/:name',
    component: () => import('../views/router/argu.vue'),
    props: true // 路由传参，布尔模式
  },
  {
    path: '/user/:id',
    component: () => import('../views/router/user.vue'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/router/profile.vue')
      },
      {
        path: 'posts',
        name: 'posts',
        component: () => import('../views/router/posts.vue')
      }
    ]
  },
  {
    path: '/userSetting',
    component: () => import('../views/router/settings.vue'),
    children: [
      {
        path: 'email',
        components: {
          default:  () => import('../views/router/email.vue'),
          helpler: () => import('../views/router/helpler.vue')
        }
      },
      {
        path: 'profile',
        component:() => import('../views/router/profile.vue')
      }
    ]
  },
  {
    path: '/email',
    component: () => import('../views/router/email.vue'),
    props: {
      food: 'banana' // 路由传参，对象模式
    }
  },
  {
    path: '/profile',
    component: () => import('../views/router/profile.vue'),
    props: route => ({username: route.query.username}) // 路由传参函数模式
  },
  {
    path: '/primary',
    component: () => import('../views/primary/primary.vue')
  },
  {
    path: '/active',
    component: () => import('../views/primary/active.vue')
  },
  {
    path: '/slot',
    component: () => import('../views/primary/slot.vue')
  },
  {
    path: '/store',
    component: () => import('../views/store/store.vue')
  },
  {
    path: '/countup',
    component: () => import('../views/CountUp.vue')
  },
  {
    path: '/splitpane',
    component: () => import('../views/SplitPane.vue')
  },
  {
    path: '/menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/render',
    component: () => import('../views/Render.vue')
  },
  // history模式下404页面
  {
    path: '*',
    component: () => import('../views/router/error_404.vue')
  }
]
