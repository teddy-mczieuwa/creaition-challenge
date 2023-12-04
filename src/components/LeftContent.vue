<template>
  <div class="left-content">
    <slot />
  </div>
</template>

<style scoped>
.left-content {
  background-color: var(--color-white);
  width: 40rem;
  transform: translateY(-30%);
}
</style>
