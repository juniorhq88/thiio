<template>
      <v-container v-if="user">
        <h1>{{ user.name }}</h1>
        <router-link :to="`/users/${user.id}/edit`">Edit</router-link>
      </v-container>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { useUserStore } from '../stores/userStore'
  import { ref, onMounted } from 'vue'
  
      user = ref('')
      const route = useRoute()
      const userStore = useUserStore()
  
      onMounted(() => {
        userStore.fetchUser(route.params.id)
        user = userStore.user
      })
  
  </script>
  