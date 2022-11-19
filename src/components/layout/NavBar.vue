<template>
  <nav>
    <router-link
      :style="$route.path === '/' ? 'border-bottom: 2px solid white;' : ''"
      class="nav-link"
      to="/"
    >
      Søg efter Jokes
    </router-link>

    <router-link
      :style="
        $route.path === '/random' ? 'border-bottom: 2px solid white;' : ''
      "
      class="nav-link"
      to="/random"
    >
      Random Joke
    </router-link>

    <router-link
      :style="
        $route.path === '/favourites' ? 'border-bottom: 2px solid white;' : ''
      "
      class="nav-link"
      to="/favourites"
    >
      Favorit Jokes

      <BaseBadge v-if="displayFavouriteJokesListLength">
        {{ displayFavouriteJokesListLength }}
      </BaseBadge>
    </router-link>
  </nav>
</template>

<script>
import { useJokeStore } from '@/stores/JokeStore.js';
import { mapState } from 'pinia';
export default {
  computed: {
    ...mapState(useJokeStore, ['displayFavouriteJokes']),
    displayFavouriteJokesListLength() {
      return this.displayFavouriteJokes.length;
    }
  }
};
</script>

<style scoped>
nav {
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(69, 69, 69);
}
.nav-link {
  padding: 8px 16px;
  margin: 0px 32px;
  color: white;
  position: relative;
}
.nav-link:hover,
.nav-link:active {
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.9);
}
</style>
