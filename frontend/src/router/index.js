import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import UserList from '../views/UserList.vue'
import UserForm from '../views/UserForm.vue'
import UserDetail from '../views/UserDetail.vue'

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
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/create',
      name: 'UserCreate',
      component: UserForm,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:id',
      name: 'UserDetail',
      component: UserDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:id/edit',
      name: 'UserEdit',
      component: UserForm,
      meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
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
