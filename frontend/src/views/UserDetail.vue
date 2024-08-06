<template>
    <div v-if="user">
      <h1>{{ user.name }}</h1>
      <router-link :to="`/users/${user.id}/edit`">Edit</router-link>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router'
  import { useUserStore } from '../stores/userStore'
  import { onMounted } from 'vue'
  
  export default {
    name: 'UserDetail',
    setup() {
      const route = useRoute()
      const userStore = useUserStore()
  
      onMounted(() => {
        userStore.fetchUser(route.params.id)
      })
  
      return {
        user: userStore.user
      }
    }
  }
  </script>
  