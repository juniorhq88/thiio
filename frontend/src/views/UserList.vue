<template>
    <v-container>
      <h1>User List</h1>
      <v-btn
                size="small"
                color="primary"
                @click="createUser()"
              >Create New User
            </v-btn>
      <v-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userStore.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <v-btn
                size="small"
                color="primary"
                @click="viewUser(user.id)"
              >
                View
              </v-btn>
              <v-btn
                size="small"
                color="warning"
                @click="editUser(user.id)"
              >
                Edit
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useUserStore } from '../stores/userStore'
  import { useRouter } from 'vue-router'


      const userStore = useUserStore()
      const router = useRouter()
  
      onMounted(() => {
        userStore.fetchUsers()
      })

      const createUser = () => {
        router.push({ name: 'UserCreate' })
      }

      const viewUser = (id) => {
        router.push({ name: 'UserDetail', params: { id } })
      }

      const editUser = (id) => {
        router.push({ name: 'UserEdit', params: { id } })
      }
  </script>
  