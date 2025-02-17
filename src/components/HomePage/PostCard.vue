<script setup>
    const props = defineProps({
        post: {
        type: Object,
        required: true
    }
    })
</script>

<template>
    <div class="card">
        <img :src="post.image" alt="image">
        <h3>{{ post.slug }}</h3>
        <p>{{ post.content.slice(0, 150) }}</p>
        <button>See More</button>
    </div>
</template>



<style scoped>
.card {
    border: 1px solid #fff;
    background-color: #fff;
    padding: 15px;
    text-align: left;
}

.card img {
    width: 100%;
}
button{
    width: 100%;
    padding: 10px;
    background-color: #1f604a;
    border:none;
    outline: none;
    border: 1px solid #fff;
    font-size: 1rem;
    color: #fff;
    margin-top: 20px;
    cursor: pointer
}</style>