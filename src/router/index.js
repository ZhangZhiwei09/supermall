import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default', 
    redirect : '/home',
  },
  {
    path: '/home',
    name: 'Home', 
    component:()=>import('../views/home')
  },
  {
    path: '/category',
    name: 'Category', 
    component:()=>import('../views/category')
  },
  {
    path: '/profile',
    name: 'Profile', 
    component:()=>import('../views/profile')
  },
  {
    path: '/cart',
    name: 'Cart', 
    component:()=>import('../views/cart')
  },
  {
    path: '/detail/:iid',
    name: 'Detail', 
    component:()=>import('../views/detail')
  }

]

const router = new VueRouter({
  routes
})

export default router
