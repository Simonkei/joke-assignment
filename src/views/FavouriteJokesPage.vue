<template>
  <div class="container">
    <JokeCard
      v-for="jokeObj in displayFavouriteJokes"
      :key="jokeObj.id"
      :jokeObj="jokeObj"
    />
  </div>
</template>

<script>
import JokeCard from '@/components/JokeCard.vue';
import { useJokeStore } from '@/stores/JokeStore.js';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useJokeStore, ['displayFavouriteJokes'])
  },
  components: {
    JokeCard
  }
};
</script>
