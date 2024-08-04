<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  authStore.initializeAuth()
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>