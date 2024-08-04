import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

const routes = [
    {
    path: '/',
    name: 'Login',
    component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
