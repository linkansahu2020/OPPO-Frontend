import { ADD_USER } from "./action";

export const reducer = (store,{type,payload})=>{
    switch(type){
        case ADD_USER:
            return {...store,user:payload}
        default:
            return store;
    }
}