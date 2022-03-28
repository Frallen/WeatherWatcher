import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/home";
import Local from "../components/localWatcher";

let routes = [
  { path: "/", component: Home },
  { path: "/local", component: Local },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
