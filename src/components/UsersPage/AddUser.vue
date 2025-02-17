<script setup>
import { ref } from 'vue';
const name = ref('')
const email = ref('')
const status = ref('')
const gender = ref('')

const url = 'https://user-management-tan-three.vercel.app/users'

const handleSubmit = async () => {
    // users data to store
    const userInfo = {
        name: name.value,
        email: email.value,
        status: status.value,
        gender: gender.value,
    }

    // fetch api post method 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    const data = await response.json()
    // console.log(data.acknowledged);
    if (data?.acknowledged) {
        alert('Data Inserted Successfully')
    }

}
</script>

<template>
    <section>
        <RouterLink to="/all-users">All Users</RouterLink>
        <div class="section-header">
            <h2>New user</h2>
            <p>Use the below form to create a new account</p>
        </div>

        <!-- add user form  -->
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name</label>
                <input v-model="name" id="name" type="text" placeholder="Your Name">
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="email" id="email" type="text" placeholder="Your Email">
            </div>

            <div class="gender">
                <label>Gender</label>
                <div>
                    <input v-model="gender" type="radio" name="gender" id="male" value="male">
                    <label for="male">Male</label>
                </div>

                <div>
                    <input v-model="gender" type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                </div>
            </div>

            <div class="status">
                <label>Status</label>
                <div>
                    <input v-model="status" type="radio" name="status" id="active" value="active">
                    <label for="active">Active</label>
                </div>

                <div>
                    <input v-model="status" type="radio" name="status" id="inactive" value="inactive">
                    <label for="female">Inactive</label>
                </div>
            </div>
            <input class="btn" type="submit" value="Save">
        </form>

    </section>
</template>

<style scoped>
.section-header {
    text-align: center;
}

form {
    max-width: 768px;
    margin: 0 auto;
}

form input[type="text"],
form input[type="email"],
form input[type="submit"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.gender,
.status {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
}

.btn {
    background-color: #1F604A;
    color: #fff;
    cursor: pointer;
}
</style>