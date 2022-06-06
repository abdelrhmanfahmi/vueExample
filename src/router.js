import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

import HelloWorld from "./views/HelloWorld.vue";
import Login from "./views/Login.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue";
import Student from "./views/Student.vue";
// import * as login_service from './services/login_service';

Vue.use(VueRouter);

const guard = function (to, from, next) {
  // check for valid auth token
  axios
    .get("http://127.0.0.1:8000/api/me")
    .then((response) => {
        console.log(response.data.access_token);
      let currentToken = localStorage.getItem("token");
      if (response.data.access_token != currentToken) {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        this.$store.dispatch("user", null);
        window.location.href = "/login";
        // this.$router.push('/login');
      }else{
        next();
      }
    })
    .catch((error) => {
      // There was an error so redirect
      console.log(error);
      window.location.href = "/login";
    });
};

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "about-app",
    component: About,
  },
  {
    path: "/login",
    name: "login-app",
    component: Login,
    meta: { requiresVisitor: true },
  },
  {
    path: "/register",
    name: "register-app",
    component: Register,
    meta: { requiresVisitor: true },
  },
  {
    path: "/home",
    name: "home-page",
    component: Home,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
  {
    path: "/students",
    name: "students-page",
    component: Student,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("isLoggedIn");
}

//   async function checkUserToken(){
//     const currentToken = localStorage.getItem('token');
//     console.log(currentToken);
//     const responseToken = await login_service.me();
//     console.log(responseToken.data.access_token);
// if(responseToken !== currentToken ){
//     localStorage.removeItem("token");
//     localStorage.removeItem("isLoggedIn");
//     this.$store.dispatch("user", null);
//     location.href = "/login";
// }
//   }

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        name: "login-app",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (isLoggedIn()) {
      next({
        name: "home-page",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
