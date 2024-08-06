import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    user: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8000/api/users')
        this.users = response.data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async fetchUser(id) {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${id}`)
        this.user = response.data
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    },
    async createUser(data) {
      try {
        const response = await axios.post('http://localhost:8000/api/users', data)
        this.users.push(response.data)
      } catch (error) {
        console.error('Error creating user:', error)
    }
    }
    },
})