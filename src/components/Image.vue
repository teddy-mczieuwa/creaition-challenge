<template>
  <img v-if="src" class="image-output" :src="src" />
</template>

<script setup>
defineProps({ src: String });
</script>

<style scoped>
.image-output {
  width: 25rem;
  margin: 0 auto;
  align-items: center;
}
</style>
