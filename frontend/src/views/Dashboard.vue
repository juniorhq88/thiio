  <template>
      <v-container>
          <h1>Dashboard</h1>
          <h2>Welcome to the Dahsboard, {{ userName }}</h2>

          <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Users Registered</v-card-title>
            <v-card-text>
              <h3>{{ userCount }}</h3>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Latest activities</v-card-title>
            <v-card-text>
              <ul>
                <li v-for="activity in recentActivities" :key="activity.id">
                  {{ activity.description }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useAuthStore } from '../stores/auth'

  
  const auth = useAuthStore()  
  const userCount = ref(0)
const recentActivities = ref([])

// Función para cargar los datos del dashboard
const loadDashboardData = () => {
  try {
    // Aquí normalmente harías una llamada a una API
    // Por ahora, usaremos datos de ejemplo
    userCount.value = 15
    recentActivities.value = [
      { id: 1, description: 'New user registered' }
    ]
  } catch (error) {
    console.error('Error al cargar los datos del dashboard:', error)
  }
}

const userName = computed(() => {
      if (auth.user) {
        const user = typeof auth.user === 'string' ? JSON.parse(auth.user) : auth.user
        return user.name || user.email || 'Usuario'
      }
      return 'Usuario'
    })

onMounted(() => {
  loadDashboardData()
  auth.initializeAuth()
})
  </script>
  