import { createApp } from 'vue'
import App from './App.vue'
import '@/style/_index.scss'
import ArticleContent from './components/ArticleContent.vue'


const app =  createApp(App)
app.component('ArticleContent',ArticleContent)


app.mount('#app')
