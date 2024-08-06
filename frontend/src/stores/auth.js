import { defineStore } from 'pinia'
import api from '../api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await api.post('/login', {
          email,
          password
        })
        
        if (response.data.token) {
          this.user = response.data.user
          this.token = response.data.token
          this.isAuthenticated = true
          
          // Guarda el token en el almacenamiento local
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          

          return true
        }
      } catch (error) {
        console.error('Login error:', error)
        return false
      }
    },
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')

    },
    initializeAuth() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      if (token) {
        this.token = token
        this.user = user
        this.isAuthenticated = true
  
      }
    }
  },
})