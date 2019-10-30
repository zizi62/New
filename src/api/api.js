import *as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{'API-KEY':'31adcd6f-52a3-40ed-b242-1a4947353a54'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => response.data)
    
    },

    unFollow(userId){
        return instance.delete(`follow/${userId}`)
       
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    
    },
    getProfile(userId){
        return  instance.get(`profile/${userId}`)
    }
}


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status){
        return instance.put(`profile/status`,{status:status})
    }
}

export const authAPI = {
    getMe(){
       return instance.get(`auth/me`)
    },
    login(email,password, rememberMe=false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logOut(){
        return instance.delete(`auth/login`)
    }

    
}