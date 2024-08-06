import { defineStore } from 'pinia'
import api from '../api'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    user: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await api.get('/users')
        this.users = response.data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async fetchUser(id) {
      try {
        const response = await api.get(`/users/${id}`)
        this.user = response.data
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    },
    async createUser(data) {
      try {
        const response = await api.post('/users', data)
        this.users.push(response.data)
      } catch (error) {
        console.error('Error creating user:', error)
    }
    }
    },
})