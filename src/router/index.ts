import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'analyse',
    component: () => import(/* webpackChunkName: "home" */ '../views/Analyse.vue')
  },
  {
    path: '/fleet',
    name: 'fleet',
    component: () => import(/* webpackChunkName: "home" */ '../views/Analyse.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    component: () => import(/* webpackChunkName: "home" */ '../views/Analyse.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
