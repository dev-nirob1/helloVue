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
            <InputField placeholder="Enter Your E-mail"></InputField>
            <BaseButton class="btn bg-secondary text-white">Subscribe</BaseButton>
        </div>
    </div>
</template>
<style scoped>
.newsletter {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter-form {
    width: 70%;
    display: flex;
}
.newsletter-form input {
    padding: 1rem ;
    flex: 1;
    border: 2px solid var(--secondary-color);
    border-radius: .5rem 0 0 .5rem;
}
.newsletter-form input:focus {
    outline: none;
}
.newsletter-form .btn {
    border-radius: 0 .5rem .5rem 0;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
}

</style>