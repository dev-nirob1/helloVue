<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
// console.log(route);
const id = route.params.id; //dynamic id from route
// console.log(id);

const url = `https://user-management-tan-three.vercel.app/users/${id}`
const loading = ref(true)
const singleUserDetails = ref({});

//getting single user data
onMounted(async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        singleUserDetails.value = data;
        loading.value = false;
    } catch (error) {
        loading.value = false
        console.log('error while fetching..', error);
    }
})
</script>

<template>
    <section>
        <RouterLink to="/all-users">Back to Users List</RouterLink>
        <h2>Information of: {{ singleUserDetails.name }}</h2>
        <p v-if="loading">Loading</p>
        <ul v-else>
            <li>Name: {{ singleUserDetails.name }}</li>
            <li>Email: {{ singleUserDetails.email }}</li>
            <li>Gender: {{ singleUserDetails.gender }}</li>
            <li>Status: {{ singleUserDetails.status }}</li>
        </ul>
    </section>
</template>

<style scoped>
section{
    text-align: center;
    padding: 30px;
}
ul{
    list-style: none;
    border: 1px solid grey;
    padding: 30px;
}
</style>