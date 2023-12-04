<template>
  <div class="title">
    <h2>{{ text }}</h2>
  </div>
</template>
<script setup>
defineProps({ text: String });
</script>

<style scoped>
.title {
  height: 50px;
  width: 100%;
  background-color: var(--color-grey);
  text-align: center;
}
</style>
