import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import AddNourishment from '../views/AddNourishment.vue'
import NourishmentList from '../views/NourishmentList.vue'
import EditNourishment from '../views/EditNourishment.vue'
import Dishes from '../views/Dishes.vue'
import Forums from '../views/Forums.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
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
      path: '/dishes',
      name: 'dishes',
      component: Dishes
    },
    {
      path: '/forums',
      name: 'forum',
      component: Forums
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
