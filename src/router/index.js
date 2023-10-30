import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import AddNourishment from '../views/AddNourishment.vue'
import NourishmentList from '../views/NourishmentList.vue'
import EditNourishment from '../views/EditNourishment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addNourishment',
      name: 'addNourishment',
      component: AddNourishment
    },
    {
      path: '/nourishmentList',
      name: 'nourishmentList',
      component: NourishmentList
    },
    {
      path: '/editNourishment:id',
      name: 'editNourishment',
      component: EditNourishment,
      props: true
    },
  ]
})

export default router
