<template>
    <div>
      <h1>Users</h1>
      <router-link to="/users/create">Create New User</router-link>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="`/users/${user.id}`">{{ user.name }}</router-link>
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '../stores/userStore'
  import { onMounted } from 'vue'
  
  export default {
    name: 'UserList',
    setup() {
      const userStore = useUserStore()
  
      onMounted(() => {
        userStore.fetchUsers()
      })
  
      return {
        users: userStore.users,
        deleteUser: userStore.deleteUser
      }
    }
  }
  </script>
  