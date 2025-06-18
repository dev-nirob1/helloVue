<script setup>
import FooterSection from '@/components/Section/FooterSection.vue';
import HeaderSection from '@/components/Section/HeaderSection.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <HeaderSection />
    <main>
        <RouterView />
    </main>
    <FooterSection />
</template>