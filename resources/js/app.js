import './bootstrap';
import '../css/app.css';

// install vue 3 
import { createApp } from 'vue';
import router from './plugins/router';
import App from './app.vue';
import vuetify from './plugins/vuetify';

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#dashboard')
