import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/css-snippets',
    name: 'css-snippets',
    component: () => import(/* webpackChunkName: "css-snippets" */ '../pages/css-snippets/index.vue'),
    children: [
      {
        name: 'wave',
        path: '',
        component: () => import(/* webpackChunkName: "css-snippets-wave" */ '../pages/css-snippets/wave.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
