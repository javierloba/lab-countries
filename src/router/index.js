import { createWebHistory, createRouter } from "vue-router";
import CountriesList from "@/views/CountriesList.vue";
import CountriesDetails from "@/views/CountriesDetails.vue";

const routes = [
  {
    path: "/",
    name: "CountriesList",
    component: CountriesList,
    children: [
      {
        path: "/country/:id",
        name: "CountriesDetails",
        component: CountriesDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
