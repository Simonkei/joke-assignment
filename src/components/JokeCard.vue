<template>
  <BaseCard>
    <div class="text">
      {{ jokeObj.joke }}
    </div>
    <i
      v-if="isFavourite"
      @click="removeJokeFromFavouriteList(jokeObj.id)"
      class="material-icons favouriteClass"
    >
      star
    </i>
    <i
      v-else
      @click="addJokeToFavouriteList(jokeObj.id)"
      class="material-icons"
    >
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
}
.text {
  width: 95%;
}
.favouriteClass {
  color: rgb(255, 187, 0);
}
</style>
