

export interface MyUser{
    username: string,
    password: string
}
export interface RegisterUser{
    username: string,
    password: string,
    passwordAgain: string
}
export interface LoginResponse {
    token: string;
}

export interface UserInfo{
    username: string,
    roles: string[]
}


export interface AuthInterface {
    token : string,
    username : string,
    roles : string[],
    logout: () => void
    login: (token: string) => void
}

export interface Jwt_info{
    sub: string,
    roles: string[]
}
