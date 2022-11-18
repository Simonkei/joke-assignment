<template>
  <div>
    <div class="form">
      <form @submit.prevent="emitSearchInput">
        <input type="text" placeholder="Søg efter jokes" v-model="input" />
        <BaseButton type="sumbit">Søg</BaseButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    };
  },
  methods: {
    emitSearchInput() {
      this.$emit('search-input', this.input);
      this.input = '';
    }
  }
};
</script>

<style scoped>
.form {
  padding: 20px;
}
form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}

form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
form input:hover,
form input:focus-visible {
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;
}
</style>
