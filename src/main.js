import { createApp } from 'vue'
import App from './App.vue'
import '@/style/_index.scss'
import MarkdownBody from './components/MarkdownBody.vue'


const app =  createApp(App)
app.component('MarkdownBody',MarkdownBody)


app.mount('#app')
