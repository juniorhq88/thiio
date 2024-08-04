<template>
    <v-app>
      <v-main>
        <v-container>
          <LoginForm />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useAuthStore } from '../stores/auth'
  import LoginForm from '../components/LoginForm.vue'
  
  const auth = useAuthStore()
  
  onMounted(() => {
    auth.initializeAuth()
    // Check if the user is authenticated before rendering the LoginForm
    if (auth.isAuthenticated) {
      // Redirect to the dashboard if authenticated
      router.push('/dashboard')
    }
  })
  </script>