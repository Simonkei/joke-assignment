<template>
  <main>
    <section id="navigation">
      <Header />
      <NavBar />
    </section>
    <section id="content">
      <AnimatedBackground />
      <!-- <div>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div> -->
      <router-view></router-view>
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
  background: #4f5151;
  width: 100%;
  position: absolute;
  z-index: -1;
  min-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
