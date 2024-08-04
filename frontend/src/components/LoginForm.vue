<template>
    <v-card class="mx-auto mt-5" max-width="400">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="email"
            label="Email"
            required
            :rules="[v => !!v || 'Email is required']"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="[v => !!v || 'Password is required']"
          ></v-text-field>
          <v-btn type="submit" color="primary" block class="mt-2" :loading="loading">Login</v-btn>
        </v-form>
      </v-card-text>
      <v-snackbar v-model="snackbar" :color="snackbarColor">
        {{ snackbarText }}
      </v-snackbar>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/auth'
  
  const auth = useAuthStore()
  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const loading = ref(false)
  const snackbar = ref(false)
  const snackbarText = ref('')
  const snackbarColor = ref('success')
  
  const handleSubmit = async () => {
    loading.value = true
    try {
      if (await auth.login(email.value, password.value)) {
        snackbarText.value = 'Login successful'
        snackbarColor.value = 'success'
        // Aquí podrías redirigir al usuario a otra página
        
        router.push('/dashboard')
        
      } else {
        snackbarText.value = 'Login failed'
        snackbarColor.value = 'error'
      }
    } catch (error) {
      snackbarText.value = 'An error occurred'
      snackbarColor.value = 'error'
    } finally {
      loading.value = false
      snackbar.value = true
    }
  }
  </script>