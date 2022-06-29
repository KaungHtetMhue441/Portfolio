import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import './circle.css';
import router from '../routes/index.js'
createApp(App).
use(router).
mount('#app');
