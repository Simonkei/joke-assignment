<template>
  <div>
    <JokeCard />
  </div>
</template>

<script>
import JokeCard from '@/components/JokeCard.vue';
import { useJokeStore } from '@/stores/JokeStore.js';
import { mapState } from 'pinia';
import axios from 'axios';
export default {
  components: {
    JokeCard
  },
  computed: {
    ...mapState(useJokeStore, ['favouritJokes'])
  }
};
</script>
