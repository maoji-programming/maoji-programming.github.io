import './assets/main.css'
import './assets/particles.scss'
import '/node_modules/primeflex/primeflex.css'
import '/node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'

import { createApp } from 'vue'
import App from './App.vue'
import Part from './Part.vue'
import Work from './components/Work.vue';

const app =  createApp(App)
app.use(router)
app.use(PerfectScrollbar)
app.component('Work',Work)
app.mount('#app')

createApp(Part).mount('#part')
