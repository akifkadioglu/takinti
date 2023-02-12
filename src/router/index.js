import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home/View.vue'
import Public from './../views/Public/View.vue'
import Account from './../views/Account/View.vue'
import { routeNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: routeNames.HOME,
    component: Home
  },
  {
    path: '/public',
    name: routeNames.PUBLIC,
    component: Public
  },
  {
    path: '/account',
    name: routeNames.ACCOUNT,
    component: Account
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
