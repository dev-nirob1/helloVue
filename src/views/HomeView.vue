<script setup>
import Banner from '@/components/HomePage/Banner.vue';
import {ref} from 'vue'

const loading = ref(true)
console.log(loading);
</script>


<template>
    <button @click="loading = !loading">toggle</button>
    <h1 v-if="loading">loading</h1>
    <Banner v-else></Banner>
</template>
