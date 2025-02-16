<script setup>
import { ref } from 'vue';
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = (e)=> {
    e.preventDefault()
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value
    }
    console.log(data);
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="grid-container">
            <div>
                <label for="first-name">First Name:</label>
                <input id="first-name" v-model="firstName" type="text">
            </div>
            <div>
                <label for="last-name">Last Name:</label>
                <input id="last-name" v-model="lastName" type="text">
            </div>
        </div>
        <div>
            <label for="email">Email:</label>
            <input id="email" v-model="email"  type="email">
        </div>
        <div>
            <label for="message">Your Message</label>

            <textarea id="message" v-model="message" rows="5"></textarea> 
        </div>
        <button type="submit">Submit Form</button>
    </form>
</template>

<style scoped>
form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

form input,
textarea,
button {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px;
}

button {
    cursor: pointer;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid lightgrey;
    color: white;
}

button:hover {
    background-color: white;
    color: black;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>