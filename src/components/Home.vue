<template>
    <div class="home">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="text-center" v-if="user">Welcome {{ user.name }}</h3>
                    <h3 class="text-center" v-if="!user">You Are Not Logged In</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name:'home-page',
        computed:{
            ...mapGetters(['user'])
        }
    }
</script>

<style scoped>
    
</style>