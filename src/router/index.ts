import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import('../views/login/LoginIndex.vue'),
    },
    {
      path: "/main",
      component: () => import('../views/mian/MainIndex.vue'),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import('../views/404/NotFound.vue'),
    }
  ],
})

export default router
