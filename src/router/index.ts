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
      name: 'main',
      path: '/main',
      component: () => import('../views/mian/MainIndex.vue')
      // children: [
      //   {
      //     path: '/main/overview/technology',
      //     component: () => import('../views/mian//cpns/MainContentCpns/OverviewTechnology.vue')
      //   },
      //   {
      //     path: '/main/overview/commodity',
      //     component: () => import('../views/mian/cpns/MainContentCpns/OverviewCommodity.vue')
      //   },
      //   {
      //     path: '/main/admin/user',
      //     component: () => import('../views/mian/cpns/MainContentCpns/AdminUser.vue')
      //   },
      //   {
      //     path: '/main/admin/department',
      //     component: () => import('../views/mian/cpns/MainContentCpns/AdminDepartment.vue')
      //   },
      //   {
      //     path: '/main/admin/menu',
      //     component: () => import('../views/mian/cpns/MainContentCpns/AdminMenu.vue')
      //   },
      //   {
      //     path: '/main/admin/role',
      //     component: () => import('../views/mian/cpns/MainContentCpns/AdminRole.vue')
      //   },
      //   {
      //     path: '/main/center/category',
      //     component: () => import('../views/mian/cpns/MainContentCpns/CenterCategory.vue')
      //   },
      //   {
      //     path: '/main/admin/info',
      //     component: () => import('../views/mian/cpns/MainContentCpns/CenterInfo.vue')
      //   }
      // ]
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
  // 验证是否登录
  if (to.path === '/main' && !token) {
    return '/login'
  }
  // 初始化页面
  if (to.path === '/main') {
    return '/main/overview/technology'
  }
})

export default router
