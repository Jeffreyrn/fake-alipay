import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/transfer', component: () => import('../views/Transfer.vue') },
  { path: '/message', component: () => import('../views/Message.vue') }, // 新增消息页面路由
  { path: '/mine', component: () => import('../views/Mine.vue') },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('../views/Certificates.vue'),
    meta: { hideTab: true } // 不显示底部tab
  },
  { path: '/government', component: () => import('../views/GovernmentService.vue'), meta: { hideTab: true }}, // 新增政务服务页面路由
  { path: '/search', component: () => import('../views/Search.vue') } // 添加搜索页面路由
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router