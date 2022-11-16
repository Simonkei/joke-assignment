import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import '@/axios';
import '@/assets/main.css';

const app = createApp(App);

app.component('BaseCard', BaseCard).component('BaseButton', BaseButton);
app.use(createPinia());
app.use(router);

app.mount('#app');
