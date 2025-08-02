<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="blog-card">
    <BaseImage :image="data.social_image" alt="image" />
    <div class="card-body pt-1">
      <SubTitle>{{ data.title.substring(0, 28) }}...</SubTitle>
      <BaseParagraph>{{ data.description.substring(0, 60) }}...</BaseParagraph><router-link
        class="btn bg-secondary text-white width-full" :to="`blogs-details/${data.user.username}/${data.slug}`">See Details</router-link>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  border-radius: .5rem;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--border-color);
}
.blog-card .btn {
  padding: .5rem;
  margin-top: .5rem;
}
.blog-card p {
  margin: .75rem 0;
}

img {
  height: 200px;
  width: 100%;
  border-radius: .5rem .5rem 0 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
</style>