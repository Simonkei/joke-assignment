<template>
  <div v-if="displayFavouriteJokes.length > 0" class="grid">
    <JokeCard
      class="card"
      v-for="jokeObj in displayFavouriteJokes"
      :key="jokeObj.id"
      :jokeObj="jokeObj"
    />
  </div>
  <div v-else><h1>Du har ingen favoritter</h1></div>
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

<style scoped>
.card {
  margin: 0 8px;
}
.grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
h1 {
  margin-top: 50px;
  color: white;
  text-align: center;
}

@media only screen and (max-width: 1000px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
