import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/index/index'),
      children: [
        {
          path: 'home',
          component: () => import('@/components/index/home')
        },
        {
          path: 'demo1',
          component: () => import('@/components/index/demo1')
        },
        {
          path: 'demo',
          component: () => import('@/components/index/demo')
        }
      ]
    }
  ]
})
