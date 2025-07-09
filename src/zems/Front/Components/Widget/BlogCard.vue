<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
  <div class="blog-card">
    <BaseImage
      src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftwmotejetvchymps1n38.png"
      alt="image"/>
    <div class="card-body">
      <SubTitle>Hello World</SubTitle>
      <BaseParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur non voluptatum.</BaseParagraph>
      <BaseButton class="bg-secondary text-white width-full">See Details</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  border-radius: .5rem;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border: 1px solid;
}
.blog-card p{ margin: .5rem 0;}
 img {
  height: 180px;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
</style>