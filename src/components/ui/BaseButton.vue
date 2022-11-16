<template>
  <button class="base-button"><slot /></button>
</template>

<style scoped>
.base-button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  font-family: 'Poppins';
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}
.base-button:hover {
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
