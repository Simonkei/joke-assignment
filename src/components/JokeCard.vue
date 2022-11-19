<template>
  <BaseCard class="card">
    <div class="text">
      {{ jokeObj.joke }}
    </div>
    <i
      v-if="isFavourite"
      @click="removeJokeFromFavouriteList(jokeObj)"
      class="material-icons favouriteClass"
    >
      star
    </i>
    <i v-else @click="addJokeToFavouriteList(jokeObj)" class="material-icons">
      star
    </i>
  </BaseCard>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useJokeStore } from '@/stores/JokeStore.js';
export default {
  props: ['jokeObj'],

  methods: {
    ...mapActions(useJokeStore, [
      'addJokeToFavouriteList',
      'removeJokeFromFavouriteList'
    ])
  },
  computed: {
    ...mapState(useJokeStore, [
      'displayFavouriteJokes',
      'getFavouriteJokeIndex'
    ]),
    isFavourite() {
      return this.getFavouriteJokeIndex(this.jokeObj) > -1;
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}
i {
  font-size: 1.6em;
  cursor: pointer;
  color: #bbb;
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
.text {
  width: 95%;
}
.favouriteClass {
  color: #ffff00c9;
}
</style>
