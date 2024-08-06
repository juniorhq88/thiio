  <template>
    <MainLayout>
      <v-container>
          <h1>Dashboard</h1>
          <h2>Welcome, {{ auth.user?.email }}</h2>

          <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Usuarios Registrados</v-card-title>
            <v-card-text>
              <h3>{{ userCount }}</h3>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Últimas Actividades</v-card-title>
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
    </MainLayout>
  </template>
  
  <script setup>
  import { useAuthStore } from '../stores/auth'
  import MainLayout from '../layouts/MainLayout.vue';
  
  const auth = useAuthStore()  
  const userCount = ref(0)
const recentActivities = ref([])

// Función para cargar los datos del dashboard
const loadDashboardData = async () => {
  try {
    // Aquí normalmente harías una llamada a una API
    // Por ahora, usaremos datos de ejemplo
    userCount.value = 1234
    recentActivities.value = [
      { id: 1, description: 'Nuevo usuario registrado' },
      { id: 2, description: 'Actualización de perfil' },
      { id: 3, description: 'Nuevo post creado' }
    ]
  } catch (error) {
    console.error('Error al cargar los datos del dashboard:', error)
  }
}

onMounted(() => {
  loadDashboardData()
})
  </script>
  