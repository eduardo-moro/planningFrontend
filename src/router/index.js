import Vue from 'vue'
import VueRouter from 'vue-router'
import Wallet from '../views/Wallet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/carteira',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
