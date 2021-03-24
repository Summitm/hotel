import { createApp } from 'vue'
import { store } from './store/store'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// axios.defaults.baseURL = 'https://localhost:8081'
axios.defaults.baseURL = 'https://museumheritagerestaurant.com'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
