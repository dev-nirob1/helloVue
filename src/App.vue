<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>
