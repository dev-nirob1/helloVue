<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue'
import BlogCard from '../Components/Widget/BlogCard.vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, watch, onMounted, watchEffect } from 'vue'
import axios from 'axios'

const blogs = ref([])
const per_page = 6

const route = useRoute()
const router = useRouter()

const currentPage = ref(parseInt(1))
const totalPages = ref(7)

const fetchBlogs = async () => {
  try {
    const res = await axios.get(`https://dev.to/api/articles?per_page=${per_page}&page=${currentPage.value}`)
    blogs.value = res.data
  } catch (err) {
    console.error('Failed to fetch blogs:', err)
  }
}

onMounted(fetchBlogs)

watchEffect(() => {
  if (route?.query?.page) {
    currentPage.value = route?.query?.page
  } else {
    currentPage.value = 1
  }
  fetchBlogs(currentPage?.value)
})
</script>


<template>
  <div class="blogs">
    <div class="container">
      <BaseTitle class="text-center mb-3">All Blogs</BaseTitle>

      <div class="medium-2 large-3 gap-2">
        <BlogCard v-for="blog in blogs" :key="blog.id" :data="blog" />
      </div>

      <!-- Pagination -->
      <ul class="pagination">
        <li>
          <RouterLink
            :to="currentPage > 1 ? `/blogs?page=${currentPage - 1}` : ''"
          >
            &laquo; Prev
          </RouterLink>
        </li>

        <li v-for="page in totalPages" :key="page">
          <RouterLink
            :to="`/blogs?page=${page}`"
            :class="{ active: page == currentPage }"
          >
            {{ page }}
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="currentPage < totalPages ? `/blogs?page=${currentPage + 1}` : ''"
          >
            Next &raquo;
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.blogs {
    padding: 3.75rem 0;
}
.pagination {
  font-size: .875rem;
  margin-top: 3rem;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.pagination li {
  border-radius: 0.5rem;
  font-weight: 500;
  color: var(--primary-color);
  background-color: var(--white-color);
}

.pagination li a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.5rem;
}

.pagination li a.active {
  background-color: var(--primary-color);
  color: var(--white-color);
}
</style>