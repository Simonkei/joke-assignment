<template>
  <div class="base-card"><slot /></div>
</template>

<style scoped>
.base-card {
  position: relative;
  padding: 16px 16px;
  background: #fff;
  margin: 20px 0;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
</style>
