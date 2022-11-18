import { createRouter, createWebHistory } from 'vue-router';
import SearchJokePage from '@/views/SearchJokePage.vue';
import RandomJokePage from '@/views/RandomJokePage.vue';
import FavouriteJokesPage from '@/views/FavouriteJokesPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SearchJokePage
    },
    {
      path: '/random',
      component: RandomJokePage
    },
    {
      path: '/favourites',
      component: FavouriteJokesPage
    }
  ]
});

export default router;
