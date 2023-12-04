<template>
  <div>
    <Vue3Lottie
      class="loader"
      :animationData="loader"
      :height="200"
      :width="200"
    />
  </div>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
import loader from "../assets/loader.json";
</script>

<style scoped>
.loader-wrapper {
  border: 1px solid;
  width: 100%;
}
.loader {
  transform: translateY(400px);
}
</style>
