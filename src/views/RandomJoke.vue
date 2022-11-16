<template>
  <div class="container">
    <BaseCard>{{ joke.joke }}</BaseCard>
    <BaseButton @click="fetchRandomJoke">New Joke</BaseButton>
  </div>
</template>

<script>
import axios from 'axios';
export default {
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
  max-width: 640px;
  margin: 20px auto;
}
</style>
