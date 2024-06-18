import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', { email, password });
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
        axios.defaults.headers.common['x-access-token'] = this.token;
        // Aquí podrías obtener más información del usuario si lo necesitas
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
    logout() {
      this.token = '';
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['x-access-token'];
    },
  },
});
