<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import BlogCard from '../Components/Widget/BlogCard.vue';
const blogs = ref([])

const fetchBlogs = async () => {
    const res = await axios.get('https://dev.to/api/articles?per_page=3&page=1')
    blogs.value = res.data
}
onMounted(fetchBlogs)
</script>

<template>
    <div class="blogs">
        <div class="container">
            <BaseTitle class="text-center mb-3">All Blogs</BaseTitle>
            <div class="medium-2 large-3 gap-2">
                <BlogCard v-for="blog in blogs" :key="blog.id" :data="blog"></BlogCard>
            </div>
        </div>
    </div>
</template>
<style scoped>
.blogs {
    padding: 3.75rem 0;
}
</style>