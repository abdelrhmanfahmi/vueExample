import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from './views/HelloWorld.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/about',
        name: 'about-app',
        component: About
    },
    {
        path: '/login',
        name: 'login-app',
        component: Login,
        meta: { requiresVisitor: true }
    },
    {
        path: '/register',
        name: 'register-app',
        component: Register,
        meta: { requiresVisitor: true }
    },
    {
        path: '/home',
        name: 'home-page',
        component: Home,
        meta: { requiresAuth: true }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
export default router;


