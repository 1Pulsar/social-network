import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "4adac7bb-64b5-486c-b78d-cd248b0cb4e5"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const samuraiAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    takeFollowUnfollowData(id, isFollowed) {
        return (isFollowed ? instance.delete(`follow/${id}`).then(response => response.data) :
            instance.post(`follow/${id}`).then(response => response.data))
    },
    getMeAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getProfileStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    changeProfileStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    changeProfileAvatar(avatar) {
        const formData = new FormData()
        formData.append('image', avatar)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}

export const loginAPI = {
    submitLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email: email, password: password,
            rememberMe: rememberMe
        }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}