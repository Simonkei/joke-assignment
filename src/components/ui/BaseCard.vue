<template>
  <div>
    <div class="base-card"><slot /></div>
  </div>
</template>

<style scoped>
.base-card {
  position: relative;
  padding: 16px;
  background: rgb(69, 69, 69);
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 16px 0;
  min-height: 180px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
</style>
