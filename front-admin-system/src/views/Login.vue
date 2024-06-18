<template>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn type="submit">Login</v-btn>
      </v-form>
    </v-container>

  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    setup() {
      const authStore = useAuthStore();
      const login = async () => {
        try {
          await authStore.login(this.email, this.password);
          this.$router.push('/'); // Redirige después de un login exitoso
        } catch (error) {
          console.error('Login failed', error);
        }
      };
  
      return {
        login,
      };
    },
  };
  </script>
  