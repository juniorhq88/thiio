import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import UserList from '../views/UserList.vue'
import UserForm from '../views/UserForm.vue'
import UserDetail from '../views/UserDetail.vue'
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [
    {
      path: '/',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'Login',
          component: Login
        },
      ]
    },
    {
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
          {
              path: 'dashboard',
              name: 'Dashboard',
              component: Dashboard,
          },
          {
            path: 'users',
            name: 'UserList',
            component: UserList,
          },
          {
            path: 'users/create',
            name: 'UserCreate',
            component: UserForm,
          },
          {
            path: 'users/:id',
            name: 'UserDetail',
            component: UserDetail,
          },
          {
            path: 'users/:id/edit',
            name: 'UserEdit',
            component: UserForm,
          }
      ]
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
