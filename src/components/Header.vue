<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Fahmy</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse d-flex bd-highlight mx-3" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-2 flex-grow-1 bd-highlight">
                  <li class="nav-item">
                    <router-link :to="'/'" class="nav-item" exact>
                        <a class="nav-link active" href="javascript:void(0);">Home</a>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="'/about'" class="nav-item" exact>
                        <a class="nav-link" href="javascript:void(0);">About</a>
                    </router-link>
                  </li>
                </ul>
                
                <!-- Not Logged In -->
                <div class="d-flex p-2 bd-highlight" v-if="!user">
                    <div class="mx-2">
                        <router-link :to="'/login'" class="nav-item" exact>
                          <a class="btn btn-success" href="javascript:void(0);">Login</a>
                        </router-link>
                    </div>
                    <div class="mx-2">
                        <router-link :to="'/register'" class="nav-item" exact>
                          <a class="btn btn-info" href="javascript:void(0);">Register</a>
                        </router-link>
                    </div>
                </div>

                <!-- Logged In -->
                <div class="d-flex p-2 bd-highlight" v-if="user">
                  <div class="mx-2">
                      <a class="btn btn-success" @click="Logout" href="javascript:void(0);">Logout</a>
                  </div>
              </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

    export default {
        name:"header-nav",
        methods:{
          Logout(){
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');
            this.$store.dispatch('user' , null);
            this.$router.push('/login');
          }
        },
        computed:{
          ...mapGetters(['user'])
        }
    }
</script>

<style scoped>

</style>