import axios, {AxiosResponse} from "axios";
import {LoginResponse, MyUser, RegisterUser, UserInfo} from "./model";


export function sendRegister(user: RegisterUser) {
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

export function githubOauthRequest(code: string) {
    return axios.get("/api/oauth" + code)
        .then((response: AxiosResponse<LoginResponse>) => response.data);
}

export function deleteRoleWithUsername(username: string, role: string) {
    return axios.request({
        method: "delete",
        url: `/api/admin/${username}/${role}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    });
}

export function addRoleWithUsername(username: string, role: string) {
    return axios.put(`/api/admin/${username}/${role}`,{}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    });
}