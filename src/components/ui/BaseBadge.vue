<template>
  <div class="badge">
    <slot />
  </div>
</template>

<style scoped>
.badge {
  background-color: #fa3e3e;
  border-radius: 4px;
  color: white;
  padding: 1px 4px;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
