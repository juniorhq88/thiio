import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.matched.some(record => record.meta.requiresAuth) && !authStore.token) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });

export default router;
