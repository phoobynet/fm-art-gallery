import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
  ],
})
