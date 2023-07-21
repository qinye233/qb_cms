import { LOGIN_TOKEN } from '@/constants'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/LoginIndex.vue')
    },
    {
      path: '/main',
      component: () => import('../views/mian/MainIndex.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/404/NotFound.vue')
    }
  ]
})

// 路由守卫判断是否登录
router.beforeEach((to) => {
  const token = localStorage.getItem(LOGIN_TOKEN)

  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
