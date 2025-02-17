<script setup>
import { onMounted, ref } from 'vue';
const url = 'https://user-management-tan-three.vercel.app/users'
const loading = ref(true)
const users = ref([]);
const question = 'Do you really want to delete this User?'


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
const handleDelete = async (id) => {
    if (confirm(question) === true) {
        try {
            const res = await fetch(`https://user-management-tan-three.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
            const data = await res.json();
            if (data.deletedCount == 1) {
                alert('User Deleted Successfully')
                users.value = users.value.filter(user => user._id !== id)
            }
        } catch (error) {
            console.log('error while delete', error);
        }
    } else {
        return;
    }
}
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
                <tr v-for="(user, index) in users" :key="user._id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.status }}</td>
                    <td>
                        <span>
                            <RouterLink :to='`/update-users/${user._id}`'>Edit</RouterLink>
                        </span>
                        <button @click="handleDelete(`${user._id}`)">Delete</button>
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
section {
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

button {
    cursor: pointer;
    padding: 8px;
}
</style>