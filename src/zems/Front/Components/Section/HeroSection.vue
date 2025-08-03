<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import HeroTitle from '@/components/Elements/HeroTitle.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="hero">
        <div class="container medium-2 align-center gap-1">
            <div class="hero-content">
                <HeroTitle>Explore Developer Insights</HeroTitle>
                <BaseParagraph>A collection of blogs from real-world developers covering web development, frameworks,
                    tips,
                    and tools to help you grow.
                </BaseParagraph>
                <RouterLink class="btn bg-secondary" to="/blogs">Explore more</RouterLink>
            </div>
            <div class="hero-image">
                <BaseImage image="/hero.jpg" alt="Developer coding illustration" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.hero {
    min-height: 100vh;
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero .hero-image {
    width: 100%;
    height: auto;
}

.hero .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content p {
    margin-top: .5rem;
    font-size: 1.25rem;
}

.hero-content .btn {
    font-size: 1.25rem;
    padding: .75rem 2.5rem;
    border-radius: .5rem;
    color: var(--white-color);
}
</style>