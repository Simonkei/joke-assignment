<template>
  <main>
    <Header />
    <NavBar />
    <RouterView />
  </main>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import NavBar from '@/components/layout/NavBar.vue';

export default {
  components: { Header, NavBar }
};
</script>

<style scoped></style>
