<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import * as login_service from "./services/login_service";

export default {
  name: "App",
  async created() {
    if (this.$route.name === "login-app") {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      this.$store.dispatch("user", null);
    } else {
      try {
        const response = await login_service.me();
        this.$store.dispatch("user", response.data.user);
      } catch (e) {
        console.log("Failed To Get User");
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        this.$store.dispatch("user", null);
        this.$router.push("/login");
      }
    }
  },
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
