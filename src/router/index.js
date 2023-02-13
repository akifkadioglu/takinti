import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home/View.vue'
import { routeNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: routeNames.HOME,
    component: Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
