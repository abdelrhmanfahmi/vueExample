<template>
    <div class="register">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="background-color: goldenrod;"></div>
                        <div class="card-body">
                            <form class="form-group" @submit="RegisterForm">
                                <div class="col mb-3">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name="name" v-model="name" placeholder="Enter Name">
                                </div>
                                <div class="col mb-3">
                                    <label>E-mail</label>
                                    <input type="email" class="form-control" name="email" v-model="email" placeholder="Enter E-mail">
                                </div>
                                <div class="col mb-3">
                                    <label>Password</label>
                                    <input type="password" class="form-control" name="password" v-model="password" placeholder="Enter Password">
                                </div>
                                <div class="col mb-3 d-flex justify-content-center">
                                    <button type="submit" class="btn btn-success">Register</button>
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
        name: "register-app",
        data(){
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            async RegisterForm(e){
                e.preventDefault();
                let formData = new FormData();
                formData.append('name' , this.name);
                formData.append('email' , this.email);
                formData.append('password' , this.password);
                await login_service.register(formData);
                this.$router.push('/login');
            }
        }

    }
</script>

<style scoped>
    
</style>