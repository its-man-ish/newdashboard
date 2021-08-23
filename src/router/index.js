import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import Profile from '../views/Profile.vue'
import Team from '../views/Team.vue'
import Orders from '../views/orders.vue'
import Inventory from '../views/Inventory.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/account',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/upload-inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
