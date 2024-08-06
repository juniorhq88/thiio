<!-- MainLayout.vue -->
<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Mi Dashboard</v-toolbar-title>
            <v-btn @click="handleLogout">Logout</v-btn>
        </v-app-bar>
        <!-- Sidebar -->
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to">
                    <template v-slot:prepend>
                        <v-icon>{{ item.icon }}</v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main fluid>
            <router-view></router-view>

            <footer>
                <p class="text-center">&copy; {{ new Date().getFullYear() }}</p>
            </footer>
        </v-main>
    </v-app>
</template>
  
<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const drawer = ref(true)

const menuItems = ref([
{ title: 'Dashboard', icon: 'mdi-home', to: '/dashboard' },
{ title: 'Users', icon: 'mdi-account', to: '/users' },
])
const auth = useAuthStore()  
const router = useRouter()

const handleLogout = () => {
    auth.logout()
    router.push('/')
}

</script>
<style scoped>
footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}
</style>