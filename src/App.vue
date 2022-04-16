<template>
    <div id="app">
      <Header />
      <router-view />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import axios from 'axios';

export default {
  name: 'App',
  async created(){
      try{
        const response = await axios.get('me');
        // this.username = response.data.name;
        this.$store.dispatch('user' , response.data);
      }catch(e){
        console.log('Failed To Get User');
      }
  },
  components: {
    Header
  }
}
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
