import Vue from "vue";
import VueRouter from "vue-router";
import CommunityRewardsDAO from "../views/CommunityRewardsDAO.vue";
// import CommunityRewardsDST from "../views/CommunityRewardsDST.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/home/Index.vue"),
    children: [
      {
        path: "",
        name: "Rewards",
        redirect: "/dao",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "/dao",
        name: "RewardsDAO",
        component: CommunityRewardsDAO
      },
      // {
      //   path: "/dst",
      //   name: "RewardsDST",
      //   component: CommunityRewardsDST
      // },
      {
        path: "/404",
        component: () => import("@/views/404.vue")
      },
      {
        path: "*",
        redirect: "/404"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
});

export default router;
