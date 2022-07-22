import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
const JobResultsView = () => import("@/views/JobResultsView.vue");
const JobView = () => import("@/views/JobView.vue");
const TeamsView = () => import("@/views/TeamsView.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
