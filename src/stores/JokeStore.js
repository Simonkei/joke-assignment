import { defineStore } from 'pinia';
import axios from 'axios';

export const useJokeStore = defineStore('JokeStore', {
  state: () => ({
    jokes: [],
    totalPages: 0,
    currentPage: 1,
    displayFavouriteJokes: [],
    searchInput: ''
  }),

  actions: {
    async fetchJokes(pageNumber) {
      if (this.searchInput) {
        const res = await axios.get(
          `search?term=${this.searchInput}&limit=10&page=${pageNumber}`
        );
        this.jokes = res.data.results;
        (this.totalPages = res.data.total_pages),
          (this.currentPage = res.data.current_page);
      } else {
        const res = await axios.get(`search?limit=10&page=${pageNumber}`);
        this.jokes = res.data.results;
        (this.totalPages = res.data.total_pages),
          (this.currentPage = res.data.current_page);
      }
    },
    async addJokeToFavouriteList(joke) {
      if (!this.isFavourite(joke)) {
        this.displayFavouriteJokes.push(joke);
      }
    },
    async removeJokeFromFavouriteList(joke) {
      let index = this.getFavouriteJokeIndex(joke);
      this.displayFavouriteJokes.splice(index, 1);
    },
    async goToFetchedPage(pageNumber) {
      this.fetchJokes(pageNumber);
    },
    async setSearchInput(input) {
      this.searchInput = input;
    },

    isFavourite(joke) {
      return this.getFavouriteJokeIndex(joke) > -1;
    },
    getFavouriteJokeIndex(joke) {
      return this.displayFavouriteJokes.findIndex((j) => j.id === joke.id);
    }
  }
});
