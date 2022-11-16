import { createRouter, createWebHistory } from 'vue-router';
import SearchJoke from '@/views/SearchJoke.vue';
import RandomJoke from '@/views/RandomJoke.vue';
import FavouriteJokes from '@/views/FavouriteJokes.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SearchJoke
    },
    {
      path: '/random',
      component: RandomJoke
    },
    {
      path: '/favourites',
      component: FavouriteJokes
    }
  ]
});

export default router;
