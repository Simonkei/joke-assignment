import { createApp } from 'vue';
import { watch } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import '@/axios';
import '@/assets/main.css';

const app = createApp(App);
const pinia = createPinia();

if (localStorage.getItem('state')) {
  pinia.state.value = JSON.parse(localStorage.getItem('state'));
}
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('state', JSON.stringify(state));
  },
  {
    deep: true
  }
);

app
  .component('BaseCard', BaseCard)
  .component('BaseButton', BaseButton)
  .component('BaseBadge', BaseBadge);
app.use(pinia);
app.use(router);

app.mount('#app');
