import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    user:null
};

const store = new Vuex.Store({
    state,
    getters:{
        //here to get current value of the user
        user: (state) => {
            return state.user;
        }
    },
    actions:{
        //the way to change the mutation is by actions
        user(context , user){
            context.commit('user' , user);
        }
    },
    mutations:{
        // here to watch the changing of actions and states
        //this mutation change the state upove
        user(state , user){
            state.user = user;
        }
    }
});

export default store;