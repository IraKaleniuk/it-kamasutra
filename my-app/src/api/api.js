import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8960d893-5e56-4cb7-97fd-4116d6446891'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get("users", {
            params: {
                page: currentPage,
                count: pageSize
            }
        })
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export  const authAPI = {
    me () {
        return instance.get('auth/me').then(response => response.data)
    }
}
