import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./vuex";
import './auth';

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

function isLoggedIn() {
  return localStorage.getItem('isLoggedIn')
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        name: 'login-app',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (isLoggedIn()) {
      next({
        name: 'home-page',
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");