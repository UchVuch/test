import { createWebHistory, createRouter } from 'vue-router'
import CardsView from './views/CardsView.vue'

const routes = [
  { path: '/', component: CardsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router