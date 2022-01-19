import { createApp } from 'vue'
import jaoUI from '../entry.esm'
import App from './dev.vue'

const app = createApp(App)
app.use(jaoUI)
app.mount('#app')
