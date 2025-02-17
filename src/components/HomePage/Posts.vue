<script setup>
import PostCard from '@/components/HomePage/PostCard.vue';

import { onMounted, ref } from 'vue';
const posts = ref([])
let loading = ref(true)

onMounted(async () => {
    try {
        const res = await fetch('https://jsonplaceholder.org/posts')
        posts.value = await res.json()
        console.log(posts);
        loading.value = false;
    } catch (error) {
        console.log(error);
    }
})

</script>

<template>
    <section id="posts">
        <h1>Posts</h1>
        <h2 v-if="loading">Loading Posts...</h2>
        <div v-else class="card-container">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />

        </div>
    </section>
</template>

<style scoped>
#posts {
    margin: 50px 0;
    background-color: #1f604a;
    padding: 30px;
}

#posts h1 {
    color: #fff;
    text-align: center;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-top: 30px;
}

h2 {
    color: #fff;
}
</style>