import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
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
          
          const router = useRouter()
          router.push('/dashboard')
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
      const router = useRouter()

      router.push('/')

    },
    initializeAuth() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      if (token) {
        this.token = token
        this.user = Json.parse(user)
        this.isAuthenticated = true
        // Aquí podrías hacer una petición al servidor para obtener los datos del usuario
        const router = useRouter()
          router.push('/dashboard')
      }
    }
  },
})