  <template>
    <v-app>
      <v-main>
        <v-container>
          <h1>Dashboard</h1>
            <h1>Welcome, {{ auth.user?.email }}</h1>
            <v-btn @click="auth.logout">Logout</v-btn>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { useAuthStore } from '../stores/auth'

    const auth = useAuthStore()
  </script>
  