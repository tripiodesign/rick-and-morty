import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=> import ("../views/Home.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import( webpackChunkName: "about" "../views/About.vue"),
  // },
  {
    path: "/pjs",
    name: "Personajes",
    component: () => import("../views/Personajes.vue"),
  },
  {
    path: "/locat",
    name: "Ubicaciones",
    component: () => import("../views/Ubicaciones.vue"),
  },
  {
    path: "/epi",
    name: "Episodios",
    component: () => import("../views/Episodios.vue"),
  },
  {
    path: "/epiDetail",
    name: "Episodio",
    component: () => import("../views/EpiDetail.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue")
  },
  {
    path: "/:catchaAll(.*)",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes,
});

export default router;
