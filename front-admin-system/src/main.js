import { createApp } from 'vue'
import Login from './views/Login.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'

loadFonts()


const pinia = createPinia();

createApp(Login)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
