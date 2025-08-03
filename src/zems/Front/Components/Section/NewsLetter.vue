<script setup lang="ts">
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import InputField from '@/components/Elements/InputField.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
    <div class="newsletter">
        <div class="container newsletter-form">
            <div class="mr-3">
                <SubTitle>Subscribe our</SubTitle>
                <BaseTitle>Newsletter</BaseTitle>
            </div>
            <div class="flex">
                <InputField placeholder="Enter Your E-mail"></InputField>
                <BaseButton class="btn bg-white">Subscribe</BaseButton>
            </div>
        </div>
    </div>
</template>
<style scoped>
.newsletter {
    color: var(--white-color);
    background: url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center / cover no-repeat fixed ;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter-form {
    display: flex;
    flex-direction: column;
}

.newsletter-form input {
    padding: 1rem;
    border: 2px solid var(--white-color);
    border-radius: .5rem 0 0 .5rem;
}
.newsletter-form input::placeholder{
    color: var(--white-color);
}
.newsletter-form input:focus {
    outline: none;
}

.newsletter-form .btn {
    border-radius: 0 .5rem .5rem 0;
    padding: 1rem 2.5rem;
    font-weight: 600;
}

@media (min-width: 768px) {
    .newsletter-form {
        width: 70%;
        flex-direction: row;
    }

    .newsletter-form .flex {
        flex: 1;
    }
}
</style>