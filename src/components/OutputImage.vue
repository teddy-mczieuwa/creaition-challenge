<template>
  <div class="output-wrapper">
    <img class="image-output" :src="src" />
  </div>
</template>

<script setup>
defineProps({ src: String });
</script>

<style scoped>
.output-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.image-output {
  width: 25rem;
  margin: 0 auto;
  align-items: center;
}
</style>
