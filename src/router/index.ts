import { createRouter, createWebHistory } from 'vue-router'
import CompanyView from '@/views/CompanyView.vue'

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CompanyView
    },
  ]
})

export default router
