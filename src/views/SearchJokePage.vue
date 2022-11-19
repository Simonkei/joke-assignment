<template>
  <SearchForm @search-input="searchJoke" />
  <div>
    <PaginationNumber
      @pageChanged="fetchPage"
      :totalPages="useJoke.totalPages"
      :currentPage="useJoke.currentPage"
    />
  </div>
  <div v-if="useJoke.jokes.length > 0" class="container">
    <JokeCard
      v-for="jokeObj in useJoke.jokes"
      :key="jokeObj.id"
      :jokeObj="jokeObj"
    />
  </div>
  <div class="notFound" v-else>
    <h1>Der findes ingen jokes med det søgeord.</h1>
  </div>
</template>

<script>
import PaginationNumber from '@/components/PaginationNumbers.vue';
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
      this.useJoke.setSearchInput(searchInput);
      this.useJoke.fetchJokes(1);
    },
    fetchPage(page) {
      this.useJoke.goToFetchedPage(page);
    }
  },
  mounted() {
    this.useJoke.fetchJokes();
  },

  components: {
    SearchForm,
    JokeCard,
    PaginationNumber
  }
};
</script>

<style scoped>
.notFound {
  text-align: center;
  color: white;
}
</style>
