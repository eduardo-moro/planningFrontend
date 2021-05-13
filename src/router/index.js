import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Cadastro from "@/components/authentication/Cadastro";
import Login from "@/components/authentication/Login";
import Recuperar from "@/components/authentication/Recuperar";
import WalletsList from "@/components/WalletsList";
import {auth} from '@/firebase';
import TransactionsList from "@/components/TransactionsList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: "Carteira"},
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/Carteira',
    name: 'Carteira',
    component: WalletsList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Transacoes',
    name: 'Transacoes',
    component: TransactionsList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Recuperar',
    name: 'Recuperar',
    component: Recuperar
  },
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth) {
    if (!isAuthenticated) {
      next('/Login');
    } else {
      next()
    }
  } else {
    if (isAuthenticated) {
      next('/Carteira');
    } else {
      next()
    }
  }
});


export default router
