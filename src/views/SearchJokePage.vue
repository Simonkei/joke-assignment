<template>
  <SearchForm @search-input="searchJoke" />
  <div class="grid">
    <JokeCard
      class="card"
      v-for="jokeObj in useJoke.jokes"
      :key="jokeObj.id"
      :jokeObj="jokeObj"
    />
  </div>
  <Pagination
    v-if="useJoke.jokes.length > 0"
    @pagechanged="fetchPage"
    :totalPages="useJoke.totalPages"
    :currentPage="useJoke.currentPage"
  />
  <div class="notFound" v-else>
    <h1>Der findes ingen jokes med det søgeord.</h1>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
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
    Pagination
  }
};
</script>

<style scoped>
.card {
  margin: 0 8px;
}
.notFound {
  text-align: center;
  color: white;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
