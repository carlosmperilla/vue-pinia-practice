import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import { Icon } from '@iconify/vue';
// Importamos la logica de negocios, principalmente en Vainilla JS
import { main } from '@/core/auth.js'

const app = createApp(App)

// Para usar un store de Pinia.
const pinia = createPinia()

app.use(router)
app.use(pinia) // Implementando el store de Pinia en el proyecto.
app.component("Icon", Icon)

// Implementamos logíca de negocios.
// Recordar hacerlo despues de usar pinia.
// Para poseer sus recursos.
main()

app.mount('#app')
