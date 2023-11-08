import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { useUserStore } from '@/stores/user'

import App from './App.vue'
import router from './router'


import 'bootstrap'
import axios from 'axios'

const app = createApp(App)



app.config.globalProperties.$http = axios;

app.use(createPinia())

app.use(router)

//保存到客戶端
const store = useUserStore();
store.loadFromLocalStorage();


app.mount('#app')
