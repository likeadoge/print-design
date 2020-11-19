import { createApp } from 'vue'
import App from './App.vue'
import '@/style/_index.scss'
import * as components from './components/_index'
import {group as demo} from './views/demo/_index'

const app =  createApp(App)

components.install(app)
demo.install(app)

app.mount('#app')
