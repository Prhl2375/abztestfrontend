// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Імпортуємо маршрутизатор

createApp(App)
    .use(router)  // Використовуємо маршрутизатор
    .mount('#app');
