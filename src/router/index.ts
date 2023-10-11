import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CalanderProcessView from '../views/CalanderProcessView.vue'
import DecryptionView from '../views/DecryptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/calanderProcess',
      name: 'calanderProcess',
      component: CalanderProcessView
    },
    {
      path: '/decryption',
      name: 'decryption',
      component: DecryptionView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      savedPosition.behavior = 'smooth'
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
