<template>
  <div class="home">
    <TitleBar />
    <Container>
      <LeftContent>
        <Title text="Select 2 images" />
        <ActionButton
          title="morph"
          :style="{ opacity: showActionButton }"
          @click="morphImages"
        />
        <div class="box1-content">
          <InputImage
            @select="imageSelected"
            data-testid="image1"
            src="/src/assets/i1.png"
          />
          <InputImage @select="imageSelected" src="/src/assets/i2.png" />
        </div>
      </LeftContent>
      <RightContent>
        <Loader v-if="loading" />
        <OutputImage
          v-else
          v-for="imageData in generatedImages"
          :src="imageData"
        />
      </RightContent>
    </Container>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ActionButton from "../components/ActionButton.vue";
import Container from "../components/Container.vue";
import InputImage from "../components/InputImage.vue";
import LeftContent from "../components/LeftContent.vue";
import Loader from "../components/Loader.vue";
import RightContent from "../components/RightContent.vue";
import OutputImage from "../components/OutputImage.vue";
import TitleBar from "../components/TitleBar.vue";
import Title from "../components/Title.vue";
const imagesData = ref([]);
const generatedImages = ref([]);
const loading = ref(false);
function imageSelected(value) {
  const index = imagesData.value.indexOf(value);
  const newArray = [...imagesData.value];

  if (index !== -1) {
    newArray.splice(index, 1);
  } else {
    newArray.push(value);
  }

  imagesData.value = newArray;
}

const showActionButton = computed(() => {
  return imagesData.value.length === 2 ? 1 : 0;
});

const morphImagePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "/src/assets/o1.png",
        "/src/assets/o2.png",
        "/src/assets/o3.png",
      ]);
    }, 2000);
  });
};

const morphImages = async () => {
  loading.value = true;
  try {
    const result = await morphImagePromise();
    console.log(result);
    generatedImages.value = result;
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};
</script>

<style scoped>
.home {
  font-family: strokeWeight;
}

.box1-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 2rem;
}
</style>
