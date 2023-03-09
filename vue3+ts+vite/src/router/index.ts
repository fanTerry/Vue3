// src/router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
//   {
//     path: '/login', // 浏览器访问地址
//     name: 'Login',
//     component: () => import(/* webpackChunkName: "login"*/ new URL('../pages/Login/index.vue', import.meta.url).href ),
//     meta:{}
//   },
  {
    path: '/index', // 测试地址
    name: 'index',
    component: () => import(/* webpackChunkName: "login"*/ new URL('@/home/index.vue', import.meta.url).href ),
    meta:{}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
