<template>
    <v-container>
      <h1>User List</h1>
      <router-link to="/users/create">Create New User</router-link>
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
  import { useUserStore } from '../stores/userStore'
  import { onMounted } from 'vue'

      const userStore = useUserStore()
  
      onMounted(() => {
        userStore.fetchUsers()
      })

      const viewUser = (id) => {
        router.push({ name: 'UserDetail', params: { id } })
      }

      const editUser = (id) => {
        router.push({ name: 'UserEdit', params: { id } })
      }
  </script>
  