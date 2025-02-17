<script setup>
import { onMounted, ref } from 'vue';
const url = 'http://localhost:5000/users'
const loading = ref(true)
const users = ref([]); 


//getting all users data from api
onMounted(async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        users.value = data;
        loading.value = false;
    } catch (error) {
        loading.value = false
        console.log('error while fetching..', error);
    }
})

//delete a user 
// const handleDelete = async(id)=>{
//     console.log('clicked');
// }
</script>

<template>
    <section>
        <RouterLink to="/users">New User</RouterLink>
        <table>
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.status }}</td>
                    <td>
                        <span>Edit</span>
                        <span @click="handleDelete">Delete</span>
                        <span>
                            <RouterLink :to='`/users/${user._id}`'>View Details</RouterLink>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="loading">Loading...</div>
    </section>
</template>

<style scoped>
section{
    padding: 30px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

thead tr {
    background-color: #1F604A;
    color: #fff;
    width: 100%;
}

th,
td {
    padding: 10px;
    border: 1px solid #918383;
    text-align: left;
}

th {
    text-transform: uppercase;
}

span {
    border: 1px solid gray;
    padding: 5px;
    margin: 5px;
}
</style>