import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
// import vuex from './vuex';

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
        component: Register
    },
    {
        path: '/Home',
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


