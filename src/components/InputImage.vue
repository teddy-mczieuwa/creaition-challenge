<template>
  <div class="image-wrapper" @click="selectedImage" data-testid="image1">
    <img class="image-input" :src="src" alt="" />
    <button
      role="checkbox"
      :class="{ selected: selected }"
      class="image-selection"
    ></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({ src: String });
const emit = defineEmits(["select"]);
const selected = ref(false);
const selectedImage = () => {
  selected.value = !selected.value;
  emit("select", props.src);
};
</script>

<style scoped>
.image-input {
  width: 15rem;
  transition: all 0.2s ease-in-out;
}

.image-input:hover {
  cursor: pointer;
  transform: translateY(5px);
}

.image-wrapper {
  position: relative;
}

.image-selection {
  border: none;
  outline: none;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
}

.selected {
  background-color: black;
}
</style>
