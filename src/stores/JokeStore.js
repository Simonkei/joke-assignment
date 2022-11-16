import { defineStore } from 'pinia';
import axios from 'axios';

export const useJokeStore = defineStore('JokeStore', {
  state: () => ({
    jokes: [],
    favouriteJokes: []
  }),

  actions: {
    async fetchJokes(searchInput) {
      if (searchInput) {
        const res = await axios.get(`search?term=${searchInput}`);
        console.log(res.data.results);
        this.jokes = res.data.results;
      } else {
        const res = await axios.get('search?limit=10');
        console.log(res.data.results);
        this.jokes = res.data.results;
      }
    },
    async addJokeToFavouriteList(jokeId) {
      if (!this.isFavourite(jokeId)) {
        this.favouriteJokes.push(jokeId);
      }
    },
    async removeJokeFromFavouriteList(jokeId) {
      this.favouriteJokes.splice(this.favouriteJokes.indexOf(jokeId), 1);
    },
    isFavourite(jokeId) {
      return this.favouriteJokes.includes(jokeId);
    }
  }
});
