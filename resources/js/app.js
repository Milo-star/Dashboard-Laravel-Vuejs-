import './bootstrap';
import '../css/app.css';

// install vue 3 
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

app.mount('#dashboard')
