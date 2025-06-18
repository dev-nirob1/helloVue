<script setup>
import { RouterLink } from 'vue-router';
import BaseTitle from '@/components/Elements/BaseTitle.vue';

</script>

<template>
    <header class="bg-secondary text-white">
        <nav class="container navbar">
            <div class="brand">
                <BaseTitle>Logo</BaseTitle>
            </div>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/blogs">Blogs</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Login</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    /* gap:.75rem; */
}

.navbar ul li a {
    text-decoration: none;
    display: inline-block;
    padding: .5rem 1rem;
    font-weight: 600;
    transition: all .3s ease-in-out;
}
.navbar ul li a:hover {
    color: var(--primary-color);
}
</style>