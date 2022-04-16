<template>
    <div class="login">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="background-color: goldenrod;"></div>
                        <div class="card-body">
                            <form class="form-group" @submit="LoginSubmit">
                                <div class="col mb-3">
                                    <label>E-mail</label>
                                    <input type="email" class="form-control" name="email" v-model="user.email" placeholder="Enter E-mail">
                                </div>
                                <div class="col mb-3">
                                    <label>Password</label>
                                    <input type="password" class="form-control" name="password" v-model="user.password" placeholder="Enter Password">
                                </div>
                                <div class="col mb-3 d-flex justify-content-center">
                                    <button type="submit" class="btn btn-success">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "login-app",
        data(){
            return{
                user:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            async LoginSubmit(e){
                e.preventDefault();
                let response = await axios.post('login' , this.user)
                localStorage.setItem('token' , response.data.access_token);
                localStorage.setItem('isLoggedIn' , 'true');
                this.$store.dispatch('user' , response.data.user);
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped>

</style>