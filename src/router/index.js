import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/Cart.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/mine/Mine.vue'),
      meta: {
        index: 1
      }
    }
  ]
})

export default router
