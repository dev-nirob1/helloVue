<script setup lang="ts">
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
  <div class="testimonial-card">
    <div class="flex align-center gap-1">
      <BaseImage image="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div>
        <SubTitle>Name</SubTitle>
        <BaseParagraph>
          Front-end Developer
        </BaseParagraph>
      </div>
    </div>
    <div>
      <BaseParagraph class="quote">
        Working with this platform has transformed the way I share and consume technical content. It's fast, intuitive, and built for developers.
      </BaseParagraph>
    </div>
    </div>
</template>
<style>
.testimonial-card {
    background-color: var(--white-color);
    border-radius: .5rem;
    padding: 2rem;
    box-shadow: var(--box-shadow);
}
.testimonial-card p {
  margin: .5rem 0 0 0;
}

.testimonial-card img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
.testimonial-card .quote {
    margin-top: 1rem;
    font-size: 1.15rem;
}
</style>