  <template>
    <v-app>
        <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mi Dashboard</v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-main fluid>
        <v-container>
          <h1>Dashboard</h1>
            <h1>Welcome, {{ auth.user?.email }}</h1>
            <v-btn @click="handleLogout">Logout</v-btn>
        </v-container>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/auth'
  
  const auth = useAuthStore()
  const router = useRouter()

  const drawer = ref(false)

  const menuItems = ref([
    { title: 'Home', icon: 'mdi-home', to: '/' },
    { title: 'Users', icon: 'mdi-account', to: '/users' },

    ])

    const handleLogout = () => {
        auth.logout()
        router.push('/')
    }

    

  </script>
  