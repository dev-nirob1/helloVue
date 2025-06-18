<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import HeroTitle from '@/components/Elements/HeroTitle.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="hero">
        <div class="hero-content">
            <HeroTitle>Explore Developer Insights</HeroTitle>
            <BaseParagraph>A collection of blogs from real-world developers covering web development, frameworks, tips,
                and tools to help you grow.
            </BaseParagraph>
            <RouterLink class="btn bg-secondary" to="/blogs">Explore more</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.hero {
    min-height: 100vh;
    color: var(--white-color);
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    max-width: 60%;
    text-align: center;
}

.hero-content p {
    font-size: 1.25rem;
}
.hero-content .btn {
    font-size: 1.25rem;
    padding: .75rem 2.5rem;
    border-radius: .5rem;
}
</style>