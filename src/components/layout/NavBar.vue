<template>
  <nav>
    <router-link class="nav-link" to="/">Søg efter Jokes</router-link>

    <router-link class="nav-link" to="/random">Random Joke</router-link>

    <router-link class="nav-link" to="/favourites">Favorit Jokes</router-link>
  </nav>
</template>

<style scoped>
nav {
  height: 30px;
  text-align: center;
  background: #e7e7e7;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.nav-link {
  padding: 8px;
}
.nav-link:hover,
.nav-link:active {
  border-bottom: 2px solid white;
}
</style>
