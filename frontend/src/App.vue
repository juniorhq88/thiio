<template>
    <router-view></router-view>
</template>
<script setup>
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const checkAuth = () => {
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  } else {
    router.push('/')
  }
}

onMounted(() => {
  authStore.initializeAuth()
  checkAuth()
})

watch(() => authStore.isAuthenticated, (newValue) => {
  checkAuth()
})
</script>