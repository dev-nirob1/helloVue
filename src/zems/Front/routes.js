import MainLayout from "./FrontLayout/MainLayout.vue";
import AboutPage from "./Pages/AboutPage.vue";
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