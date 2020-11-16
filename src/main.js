import { createApp } from 'vue'
import App from './App.vue'
import '@/style/_index.scss'
import ArticleContent from './components/ArticleContent.vue'
import AliIcon from './components/AliIcon.vue'


const app =  createApp(App)
app.component('ArticleContent',ArticleContent)
app.component('AliIcon',AliIcon)


app.mount('#app')
