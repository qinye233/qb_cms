const menuRoute = [
  {
    path: '/main/overview/technology',
    component: () => import('../views/mian//cpns/MainContentCpns/OverviewTechnology.vue')
  },
  {
    path: '/main/overview/commodity',
    component: () => import('../views/mian/cpns/MainContentCpns/OverviewCommodity.vue')
  },
  {
    path: '/main/admin/user',
    component: () => import('../views/mian/cpns/MainContentCpns/AdminUser.vue')
  },
  {
    path: '/main/admin/department',
    component: () => import('../views/mian/cpns/MainContentCpns/AdminDepartment.vue')
  },
  {
    path: '/main/admin/menu',
    component: () => import('../views/mian/cpns/MainContentCpns/AdminMenu.vue')
  },
  {
    path: '/main/admin/role',
    component: () => import('../views/mian/cpns/MainContentCpns/AdminRole.vue')
  },
  {
    path: '/main/center/category',
    component: () => import('../views/mian/cpns/MainContentCpns/CenterCategory.vue')
  },
  {
    path: '/main/admin/info',
    component: () => import('../views/mian/cpns/MainContentCpns/CenterInfo.vue')
  }
]

export default menuRoute
