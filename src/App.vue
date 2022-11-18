<template>
  <main>
    <section id="navigation">
      <Header />
      <NavBar />
    </section>
    <section id="content">
      <AnimatedBackground />
      <RouterView />
    </section>
  </main>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import NavBar from '@/components/layout/NavBar.vue';
import AnimatedBackground from '@/components/layout/AnimatedBackground.vue';

export default {
  components: { Header, NavBar, AnimatedBackground }
};
</script>

<style scoped>
main {
  overflow: hidden;
  background: #676ab1;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  position: absolute;
  z-index: -1;
  min-height: 100vh;
}
</style>
