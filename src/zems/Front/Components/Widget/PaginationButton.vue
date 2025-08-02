<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  currentPage: {
    type: Number
  },
  route: {
    type: String
  },
  couponsData: {
    type: Object
  }
})
</script>
<template>
  <ul class="pagination">
    <ListItem>
      <RouterLink :to="currentPage == 1 ? '' : `/coupon_list/${$route.params.type}?p=${parseInt(currentPage) - 1}`">
        &laquo; Prev
      </RouterLink>
    </ListItem>
    <ListItem v-for="(link, i) in couponsData?.last_page" :key="i">
      <RouterLink :class="link == currentPage && 'active'" :to="`/coupon_list/${route?.params?.type}?p=${link}`"> {{ i +
        1 }}</RouterLink>
    </ListItem>
    <ListItem>
      <RouterLink
        :to="couponsData?.last_page == currentPage ? '' : `/coupon_list/${route?.params?.type}?p=${parseInt(currentPage) + 1}`">
        Next &raquo;</RouterLink>
    </ListItem>
  </ul>
</template>

<style scoped>
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