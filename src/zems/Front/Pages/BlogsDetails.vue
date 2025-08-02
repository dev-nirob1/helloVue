<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const blogDetails = ref({})

const route = useRoute()
console.log(route.params.username);
const fetchBlogDetails = async () => {
    try {
        const res = await axios.get(`https://dev.to/api/articles/${route?.params?.username}/${route?.params?.slug}`)
        blogDetails.value = res.data
    } catch (error) {
        console.log('blog details error', error);
    }
}
onMounted(fetchBlogDetails)


</script>

<template>
    <section class="blog-details">
        <div class="container">
            <div class="large-3 gap-1">
                <div class="large-span-2 content">

                </div>
                <div class="author">
                    <div class="profile">
                        <BaseImage :image="blogDetails?.user?.profile_image" alt="profile image" />
                        <SubTitle>{{ blogDetails?.user?.name }}</SubTitle>
                    </div>
                    <BaseButton class="bg-success text-white width-full">Follow</BaseButton>
                    <BaseParagraph>Software engineer, home lab server enthusiast, passionate about online privacy and
                        dark themes 😎
                    </BaseParagraph>
                    <div class="author-location">
                        <SubTitle>Location</SubTitle>
                        <BaseParagraph>United States</BaseParagraph>
                    </div>
                    <div class="author-joined">
                        <SubTitle>Joined</SubTitle>
                        <BaseParagraph>Jan 16, 2021</BaseParagraph>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-details {
    padding: 3.75rem 0;
}

.blog-details .content {
    background-color: var(--white-color);
    border-radius: 1rem;
}

.blog-details .author {
    border: 1px solid var(--border-color);
    padding: 1rem;
    border-radius: 1rem;
}

.blog-details .profile img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
}

.blog-details .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}
.blog-details .author .author-location p,
.blog-details .author .author-joined p{
    margin-top: .25rem;
}
</style>
