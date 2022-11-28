import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Auth from "@/views/Auth.vue";

const routes = [
    {
        path: "/",
        name: "/",
        component: HomePage,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/home",
        name: "home",
        component: HomePage,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Auth.vue"),
        props: true,
    },
    {
        path: "/class/watch",
        name: "watch",
        component: () => import("@/views/ClassWatch.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
        
    },
    {
        path: "/class/edit",
        name: "edit",
        component: () => import("@/views/classEdit.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/assigning",
        name: "assigning",
        component: () => import("@/views/Assigning.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/schedule",
        name: "schedule",
        component: () => import("@/views/Schedule.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/voting",
        name: "voting",
        component: () => import("@/views/Voting.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/score",
        name: "score",
        component: () => import("@/views/Score.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/teaching",
        name: "teaching",
        component: () => import("@/views/Teaching.vue"),
        props: true,
        meta:{needAuth:true},
        beforeEnter: ifAuthenticated,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    

];

function ifAuthenticated(to, from, next) {
    if (localStorage.getItem("token")) {
        // alert('Đăng nhập thành công!');
        next();
        return;
    }
    router.push({ name: 'login' });
};
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;