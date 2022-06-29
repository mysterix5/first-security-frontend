import axios, {AxiosResponse} from "axios";
import {LoginResponse, MyUser, UserInfo} from "./model";


export function sendRegister(user: MyUser) {
    return axios.post("/api/user", user)
        .then(r => r.data);
}

export function sendLogin(user: MyUser) {
    return axios.post("/api/login", user)
        .then((response: AxiosResponse<LoginResponse>) => response.data)
}

export function getUser() {
    return axios.get("/api/user", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    })
        .then((response: AxiosResponse<string>) => response.data);
}


export function getAllUsers() {
    return axios.get("/api/admin", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    })
        .then((response: AxiosResponse<UserInfo[]>) => response.data);
}

export function deleteUserByUsername(name: string) {
    return axios.delete("/api/admin/" + name, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    });
}
