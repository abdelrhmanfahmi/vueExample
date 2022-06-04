import {http, httpFile} from "./http_service";

export function login(data){
    return httpFile().post('/login' , data);
}

export function register(data){
    return httpFile().post('/register' , data);
}

export function me(){
    return http().get('/me');
}