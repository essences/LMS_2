import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ルートガードの設定
router.beforeEach((to, from, next) => {
  // 認証チェックなどの処理をここに追加
  next()
})

export default router
