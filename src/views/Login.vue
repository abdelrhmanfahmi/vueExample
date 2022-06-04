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
                                    <input type="email" class="form-control" name="email" v-model="email" placeholder="Enter E-mail">
                                </div>
                                <div class="col mb-3">
                                    <label>Password</label>
                                    <input type="password" class="form-control" name="password" v-model="password" placeholder="Enter Password">
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
    import * as login_service from '../services/login_service';
    export default {
        name: "login-app",
        data(){
            return{
                email:'',
                password:'' 
            }
        },
        methods:{
            async LoginSubmit(e){
                e.preventDefault();
                let formData = new FormData();
                formData.append('email' , this.email);
                formData.append('password' , this.password);
                let response = await login_service.login(formData);
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