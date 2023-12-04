<template>
  <div class="cta">
    <button>{{ title }}</button>
  </div>
</template>
<script setup>
defineProps({ title: String });
</script>
<style scoped>
.cta {
  height: 50px;
  padding: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 2rem;
}
.cta button {
  background-color: white;
  border: 1px solid black;
  border-radius: 50px;
  transform: translateX(-20px);
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  transition: all 0.2s ease-in-out;
}

.cta button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.cta button:active {
  border: 1px solid white;
}
</style>
