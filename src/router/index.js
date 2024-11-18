import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import(/* webpackChunkName: "sobre" */ '../components/SobreComponent.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../components/LoginComponent.vue')
  },
  {
    path: '/criar',
    name: 'criar',
    component: () => import(/* webpackChunkName: "criar" */ '../components/CriarComponent.vue')
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import(/* webpackChunkName: "feed" */ '../components/FeedComponent.vue')
  },
  // {
  //   path: '/contato',
  //   name: 'contato',
  //   component: () => import(/* webpackChunkName: "contato" */ '../components/ContatoComponent.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
