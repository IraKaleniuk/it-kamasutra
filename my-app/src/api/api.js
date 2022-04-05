import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '59384a34-8882-420c-b783-a1e01bdbb774'
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
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {
            email, password, rememberMe
        }).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}
