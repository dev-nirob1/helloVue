import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import UsersView from '@/views/UsersView.vue'
import AddUser from '@/components/UsersPage/AddUser.vue'
import AllUsers from '@/components/UsersPage/AllUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      component: UsersView,
      children: [
        {
          path: '',
          component: AddUser,
        }, 
        {
          path: '/all-users',
          component: AllUsers,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ],
})

export default router
