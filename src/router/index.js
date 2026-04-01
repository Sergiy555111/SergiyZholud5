import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory('/SergiyZholud5/'),
  routes
})

export default router;