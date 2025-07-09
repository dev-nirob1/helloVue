<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import TestimonialsCard from '../Widget/TestimonialsCard.vue';

</script>

<template>
    <div class="testimonials bg-lighten">
        <div class="container medium-2 align-center gap-2">
            <div>
                <BaseTitle>Developer Thoughts</BaseTitle>
                <BaseParagraph>
                    See what fellow developers think about the platform.
                </BaseParagraph>
            </div>
            <div class="testimonials-content">
                <TestimonialsCard/>
                <TestimonialsCard/>
                <TestimonialsCard/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.testimonials {
    padding: 3.75rem 0;
}

.testimonials-content {
    display: flex;
    overflow: auto;
    gap: 2rem;
    padding: 1rem;
    scroll-behavior: smooth;
}
.testimonials-content::-webkit-scrollbar{
    display: none;
}
</style>