<template>
  <div class="base-card"><slot /></div>
</template>

<style scoped>
.base-card {
  position: relative;
  padding: 16px 16px;
  background: rgba(255, 255, 255, 0.9);
  margin: 20px 0;
  min-height: 30px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
</style>
