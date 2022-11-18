import { defineStore } from 'pinia';
import axios from 'axios';

export const useJokeStore = defineStore('JokeStore', {
  state: () => ({
    jokes: [],
    favouriteJokes: [],
    displayFavouriteJokes: []
  }),

  actions: {
    async fetchJokes(searchInput) {
      if (searchInput) {
        const res = await axios.get(`search?term=${searchInput}&limit=10`);
        this.jokes = res.data.results;
      } else {
        const res = await axios.get('search?limit=10');
        this.jokes = res.data.results;
      }
    },
    async addJokeToFavouriteList(joke) {
      if (!this.isFavourite(joke.id)) {
        this.favouriteJokes.push(joke.id);
        this.displayFavouriteJokes.push(joke);
      }
    },
    async removeJokeFromFavouriteList(joke) {
      this.favouriteJokes.splice(this.favouriteJokes.indexOf(joke.id), 1);
      this.displayFavouriteJokes.splice(
        this.displayFavouriteJokes
          .map((j) => {
            return j.id;
          })
          .indexOf(joke.id),
        1
      );
    },
    isFavourite(jokeId) {
      return this.favouriteJokes.includes(jokeId);
    }
  }
});
