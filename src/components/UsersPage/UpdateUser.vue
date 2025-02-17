<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const name = ref('')
const email = ref('')
const status = ref('')
const gender = ref('')

const route = useRoute() 
const id = route.params.id;
const userInfo = ref({});
const loading = ref(true)


//getting single user data for default values;
onMounted(async () => {
    try {
        const res = await fetch(`https://user-management-tan-three.vercel.app/users/${id}`)
        const data = await res.json()
        userInfo.value = data;
        
        //updating default value;
        name.value = userInfo.value.name;
        email.value = userInfo.value.email;
        gender.value = userInfo.value.gender;
        status.value = userInfo.value.status;

        // loading false after getting data 
        loading.value = false;
    } catch (error) {
        loading.value = false
        console.log('error while fetching..', error);
    }
})

//update user info handler
const handleUpdateUser = async () => {
    try {
        //data to update
        const updatedInfo = {
        name: name.value,
        email: email.value,
        status: status.value,
        gender: gender.value,
    }

    const response = await fetch(`https://user-management-tan-three.vercel.app/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedInfo)
    })
    const data = await response.json()
    loading.value = false;
    // console.log(data);
    if (data?.acknowledged) {
        alert('Data Updated Successfully')
    } 

    } catch (error) {
        loading.value = false;
        console.log('error while updating data', error);
    }
}
</script>

<template>
    <section>
        <!-- router link === anchor  -->
        <RouterLink to="/all-users">All Users</RouterLink>
        <div class="section-header">
            <h2>Update info of: {{name}}</h2>
        </div>

        <!-- form  -->
        <form @submit.prevent="handleUpdateUser">
            <div>
                <label for="name">Name</label>
                <input v-model="name" id="name" type="text" placeholder="Your Name">
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="email" id="email" type="text" placeholder="Your Email" readonly>
            </div>

            <!-- //gender radio btn  -->
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

            <!-- status radio btn  -->
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