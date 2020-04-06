import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setToken, getToken } from '@/lib/utils'
import store from '@/store'

Vue.use(Router)

const router =  new Router({
  routes
})

// const HAS_LOGINED = false // 登录状态，从store中获取

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置路由元信息
  window.document.title = (to.meta && to.meta.title) ? to.meta.title : 'admin'

  // 1. 不是login页面
  // 如果登陆了，就在当前页面；如果没有登录就跳转到登录页
  // 2. 是login页
  // 如果登陆了，就跳到主页，否则继续留在login页
  // if (to.path !== '/login') {
  //   if (HAS_LOGINED) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }else {
  //   if (HAS_LOGINED) {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // }
  const token = getToken()
  if (token) {
    store.dispatch('authorization', token).then(() => {
      if (to.path === '/login') next({ path: '/' })
      else next()
    }).catch(() => {
      setToken('')
      next({ path: '/login' })
    })
  } else {
    // token不存在的情况下，如果是login页，继续处理，如果不是login页，就跳转到login页
    if (to.path === '/login') next()
    else next({ path: '/login'})
  }

})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // 在导航被确认之前，同时在所有组件内的守卫和异步路由组件被解析之后，解析守卫就被调用
  next()
})
// 全局后置钩子
router.afterEach((to, from) => {
  // 不接受next函数，也不改变导航本身
  // 取消loading状态
})

/**
 *  1. 导航被触发
 *  2. 在失活的组件里调用离开守卫beforeRouteLeave
 *  3. 调用全局的beforeEach守卫
 *  4. 在重用的组件里调用beforeRouteUpdate守卫
 *  5. 调用路由独享的守卫beforeEnter
 *  6. 解析异步路由组件
 *  7. 在激活的组件内调用beforeRouteEnter
 *  8. 调用全局解析守卫beforeResolve
 *  9. 导航被确认
 *  10. 调用全局afterEach钩子
 *  11. 触发DOM更新
 *  12. 用创建好的实例调用beforeRouterEnter守卫中传给next的回调函数
 */

export default router
