<template>
  <div class="container">
    <JokeCard class="card" v-if="joke" :jokeObj="joke" />
    <div class="button">
      <BaseButton @click="fetchRandomJoke">New Joke</BaseButton>
    </div>
  </div>
</template>

<script>
import JokeCard from '@/components/JokeCard.vue';
import axios from 'axios';
export default {
  components: {
    JokeCard
  },
  data() {
    return {
      joke: {}
    };
  },
  methods: {
    async fetchRandomJoke() {
      const res = await axios.get();
      this.joke = res.data;
    }
  },
  mounted() {
    this.fetchRandomJoke();
  }
};
</script>
<style scoped>
.container {
  margin: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
.card {
  width: 500px;
}
.button {
  text-align: center;
  margin-top: 50px;
}
</style>
