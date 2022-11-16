<template>
  <SearchForm @search-input="searchJoke" />

  <div class="container">
    <JokeCard
      v-for="jokeObj in useJoke.jokes"
      :key="jokeObj.id"
      :jokeObj="jokeObj"
    />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import JokeCard from '@/components/JokeCard.vue';
import { useJokeStore } from '@/stores/JokeStore.js';

export default {
  data() {
    return {
      useJoke: useJokeStore()
    };
  },
  methods: {
    searchJoke(searchInput) {
      this.useJoke.fetchJokes(searchInput);
    }
  },
  mounted() {
    this.useJoke.fetchJokes();
  },

  components: {
    SearchForm,
    JokeCard
  }
};
</script>

<style scoped>
.container {
  max-width: 640px;
  margin: 20px auto;
}
</style>
