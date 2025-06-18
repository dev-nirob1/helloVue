import MainLayout from "./FrontLayout/MainLayout.vue";
import AboutPage from "./Pages/AboutPage.vue";
import BlogsPage from "./Pages/BlogsPage.vue";
import ContactPage from "./Pages/ContactPage.vue";
import HomePage from "./Pages/HomePage.vue";

export default [
      {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomePage,
        },
        {
          path: "/blogs",
          name: "blogs",
          component: BlogsPage,
        },
        {
          path: "/about",
          name: "about",
          component: AboutPage,
        },
        {
          path: "/contact",
          name: "contact",
          component: ContactPage,
        },
      ],
    },
]