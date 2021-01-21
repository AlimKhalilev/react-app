import * as axios from "axios"

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "586b73f2-a87d-43b3-a302-62ce4f729018"
    }
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get("users?page=" + currentPage + "&count=" + pageSize);
    },
    followToUser: (id) => {
        return instance.post("follow/" + id); // подписка
    },
    unfollowToUser: (id) => {
        return instance.delete("follow/" + id); // отписка
    },
    getUserProfile: (id) => {
        return instance.get("profile/" + id); // получить профиль пользователя
    }
}