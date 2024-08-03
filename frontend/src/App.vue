<template>
  <v-app>
    <v-main>
      <v-container>
        <LoginForm v-if="!auth.isAuthenticated" />
        <div v-else>
          <h1>Welcome, {{ auth.user?.email }}</h1>
          <v-btn @click="auth.logout">Logout</v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import LoginForm from './components/LoginForm.vue'

const auth = useAuthStore()

onMounted(() => {
  auth.initializeAuth()
})
</script>