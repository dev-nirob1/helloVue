<script setup>
import { onMounted, ref } from 'vue';
import BaseTitle from '../Elements/BaseTitle.vue';
import BaseButton from '../Elements/BaseButton.vue';
import { RouterLink } from 'vue-router';
import ListItem from '../Elements/ListItem.vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {

    const navbar = document.querySelector('.nav-links')
    // console.log(navbar.childNodes);
    navbar.childNodes.forEach(element => {
        element.addEventListener('click', () => {
            isMenuOpen.value = false
        })
    });
})
</script>

<template>
    <header class="navbar bg-secondary">
        <nav class="flex justify-between align-center container">
            <!-- Logo -->
            <RouterLink to="/" class="logo">
                    <BaseTitle>DevDairies</BaseTitle>
            </RouterLink>

            <!-- Mobile Menu Button -->
            <BaseButton class="hamburger" @click="toggleMenu">
                <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
            </BaseButton>

            <!-- Navigation Links -->
            <ul class="nav-links" :class="{ 'active': isMenuOpen }">
                <ListItem>
                    <RouterLink to="/">Home</RouterLink>
                </ListItem>
                <ListItem><router-link to="/blogs">Blogs</router-link></ListItem>
                <ListItem><router-link to="/about-us">About</router-link></ListItem>
                <ListItem><router-link to="/contact-us">Contact</router-link></ListItem>
                <ListItem><router-link to="/login">Login</router-link></ListItem>
            </ul>
        </nav>
    </header>
</template>

<style >
.navbar {
    color: var(--white-color);
    padding: 0.75rem 0;
    transition: 0.3s ease;
}

.navbar a {
    text-decoration: none;
}

.nav-links {
    display: flex;
    align-items: center;
}

.navbar ul {
    list-style: none;
    position: fixed;
    top: -100%;
    left: -100%;
    width: 80%;
    margin: 0;
    color: var(--white-color);
    background: var(--secondary-color);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 1.5rem;
    transition: 0.3s;
}

.navbar ul.active {
    top: 0;
    left: 0;
}

.navbar ul li a {
    font-weight: 600;
    transition: color 0.2s ease-in-out;
    position: relative;
    padding: 0.5rem 0;
}

.navbar ul li a:hover {
    color: var(--alternative-color);
}

/* Mobile menu toggle */
.hamburger {
    display: block;
    color: var(--white-color) ;
    border: none;
    cursor: pointer;
}

@media (min-width: 992px) {
    .navbar ul {
        position: inherit;
        color: var(--white-color);
        width: 100%;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        background-color: transparent;
        padding: 0.75rem 0;
    }

    /* Desktop menu hover effects */
    .navbar ul li a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--alternative-color);
        transition: width 0.3s ease;
    }

    .navbar ul li a:hover::after {
        width: 100%;
    }
    /* expand navlinks on desktop  */
    .hamburger {
        display: none;
    }
}
</style>