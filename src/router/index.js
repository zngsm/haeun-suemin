import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Envelope from '../views/Envelope.vue'
import Finish from '../views/Finish.vue'
import Loop from '../views/Loop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'Video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/envelope',
    name: 'Envelope',
    component: Envelope
  },
  {
    path: '/end',
    name: 'Finish',
    component: Finish
  },
  {
    path: '/loop',
    name: 'Loop',
    component: Loop
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
