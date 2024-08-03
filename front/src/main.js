import { createApp } from 'vue'
import App from '@/App.vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

// Create vue app
const app = createApp(App)

app.use(PerfectScrollbar);
// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
