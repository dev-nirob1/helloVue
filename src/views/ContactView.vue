<script setup>
import { ref } from 'vue';
const rawHtml = ref('hello world')
</script>

<template>
  <div class="contact">
    <h1>This is an Contact page</h1>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>