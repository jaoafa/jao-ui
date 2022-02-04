import { createApp } from 'vue'
import jaoUI from '../build'
import App from './dev.vue'

const app = createApp(App)
app.use(jaoUI)
app.mount('#app')
