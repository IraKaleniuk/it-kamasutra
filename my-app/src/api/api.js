import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8960d893-5e56-4cb7-97fd-4116d6446891'
    }
})

export const API = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get("users", {
            params: {
                page: currentPage,
                count: pageSize
            }
        })
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
