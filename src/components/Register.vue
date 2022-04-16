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
                                    <input type="text" class="form-control" name="name" v-model="user.name" placeholder="Enter Name">
                                </div>
                                <div class="col mb-3">
                                    <label>E-mail</label>
                                    <input type="email" class="form-control" name="email" v-model="user.email" placeholder="Enter E-mail">
                                </div>
                                <div class="col mb-3">
                                    <label>Password</label>
                                    <input type="password" class="form-control" name="password" v-model="user.password" placeholder="Enter Password">
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
    import axios from 'axios';
    export default {
        name: "register-app",
        data(){
            return {
                user:{
                    name:'',
                    email:'',
                    password:''            
                }
            }
        },
        methods:{
            async RegisterForm(e){
                e.preventDefault();
                await axios.post('register' , this.user);
                this.$router.push('/login');
            }
        }

    }
</script>

<style scoped>
    
</style>