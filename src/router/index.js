import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.url),
  routes
})

export default router
