import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "5fbf1f38-0a7b-42ec-aa23-9ae20b1a1b1c"
    },


})

export const usersAPI = {
    getUsers(currentPage= 1, pageSize=5){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response =>{
           return response.data
        })
    }
}
