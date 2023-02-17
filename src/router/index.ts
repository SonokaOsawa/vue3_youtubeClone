import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/myPage",
      name: "myPage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MyPage.vue"),
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("../views/UploadView.vue"),
    },
    {
      path: "/:videoId",
      name: "videoDetail",
      component: () => import("../views/VideoDetail.vue"),
    },
    {
      path: "/myPage/:videoId",
      name: "videoEdit",
      component: () => import("../views/VideoEdit.vue"),
    },
  ],
});

export default router;
