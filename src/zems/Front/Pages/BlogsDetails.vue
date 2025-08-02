<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import HeroTitle from '@/components/Elements/HeroTitle.vue';
import ListItem from '@/components/Elements/ListItem.vue';
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
            <div class="large-3 gap-2">
                <div class="large-span-2 content">
                    <BaseImage class="cover-image" :image="blogDetails?.cover_image" alt="cover image" />
                    <div class="p-2">
                        <div class="profile">
                            <BaseImage :image="blogDetails?.user?.profile_image" alt="profile image" />
                            <div>
                                <SubTitle>{{ blogDetails?.user?.name }}</SubTitle>
                                <small>Posted on {{ blogDetails?.readable_publish_date }}</small>
                            </div>
                        </div>
                        <HeroTitle>{{ blogDetails?.title }}</HeroTitle>

                        <ul class="tags">
                            <ListItem v-for="(tag, i) in blogDetails?.tags" :key="i">
                                <BaseButton>#{{ tag }}</BaseButton>
                            </ListItem>
                        </ul>

                        <div class="blog-data" v-html="blogDetails?.body_html"></div>
                    </div>
                </div>




                <div class="author">
                    <div class="profile">
                        <BaseImage :image="blogDetails?.user?.profile_image" alt="profile image" />
                        <SubTitle>{{ blogDetails?.user?.name }}</SubTitle>
                    </div>
                    <BaseButton class="bg-secondary text-white width-full">Follow</BaseButton>
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

/* content css  */
.blog-details .content {
    box-sizing: border-box;
    max-width: 700px;
    background-color: var(--white-color);
    border-radius: 1rem;
}

.blog-details .content .cover-image {
    max-height: 380px;
    border-radius: 1rem 1rem 0 0;
}
.blog-details .content .tags {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}
.blog-details .content .blog-data {
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;
}

.blog-details .content .blog-data img,
.blog-details .content .blog-data video,
.blog-details .content .blog-data iframe {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.blog-details .content .blog-data pre,
.blog-details .content .blog-data code {
  max-width: 100%;
  overflow-x: auto;
  display: block;
  padding: 1rem;
  border-radius: 6px;
}

.blog-details .content .blog-data table {
  display: block;
  width: 100%;
  overflow-x: auto;
}


.blog-details .content .tags .btn{
    border: 1px solid transparent;
}
.blog-details .content .tags .btn:hover{
    border: 1px solid var(--border-color);
}


/* author info css  */
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
.blog-details .author .author-joined p {
    margin-top: .25rem;
}
</style>
