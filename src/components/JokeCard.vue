<template>
  <BaseCard>
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
    ...mapState(useJokeStore, ['favouriteJokes']),
    isFavourite() {
      return this.favouriteJokes.includes(this.jokeObj.id);
    }
  }
};
</script>

<style scoped>
i {
  font-size: 1.4em;
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
  color: #ffd859;
}
i {
}
</style>
