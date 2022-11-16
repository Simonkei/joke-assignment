<template>
  <header>
    <img @click="$router.push('/')" src="@/assets/laugh.png" />
    <h1 @click="$router.push('/')">Jokes</h1>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 75px;
  transform: rotate(-10deg);
  cursor: pointer;
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
  cursor: pointer;
}
</style>
