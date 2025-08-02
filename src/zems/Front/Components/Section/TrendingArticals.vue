<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import BlogCard from '../Widget/BlogCard.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const trendingData = ref([])

const getTrendingArticals = async () => {
    try {
        const res = await axios.get('https://dev.to/api/articles?top=7&per_page=6');
        console.log(res);
        trendingData.value = res.data
    } catch (error) {
        console.log(error);
    }
}
onMounted(getTrendingArticals)
</script>

<template>
    <div class="trending-blogs">
        <div class="container">
            <BaseTitle class="text-center">Trending Articals</BaseTitle>
            <div class="medium-2 large-3 gap-2 mt-3">
                <BlogCard v-for="data in trendingData" :key="data" :data="data" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.trending-blogs {
    padding: 3.75rem 0;
}
</style>