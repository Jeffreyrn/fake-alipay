import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/transfer', component: () => import('../views/Transfer.vue') },
  { path: '/message', component: () => import('../views/Message.vue') }, // 新增消息页面路由
  { path: '/mine', component: () => import('../views/Mine.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router