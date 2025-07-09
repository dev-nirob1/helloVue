<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import BlogCard from '../Widget/BlogCard.vue';

</script>

<template>
    <div class="trending-blogs">
        <div class="container">
            <BaseTitle class="text-center">Trending Articals</BaseTitle>
            <div class="medium-2 large-3 gap-2 mt-3">
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
            </div>
        </div>
    </div>
</template>
<style scoped>
.trending-blogs {
    padding: 3.75rem 0;
}
</style>