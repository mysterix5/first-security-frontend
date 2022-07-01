import {ReactNode, useContext, useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {Jwt_info} from "../services/model";

export default function AuthProvider({children}:{children :ReactNode}) {
    const nav = useNavigate()
    const [token, setToken] = useState(localStorage.getItem('jwt') ?? '')
    const [roles, setRoles] = useState<string[]>([])
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (token) {
            const decodeJWT : Jwt_info = jwtDecode(token)
            setUsername(decodeJWT.sub);
            setRoles(decodeJWT.roles)
        }
    }, [token, nav])


    const logout = () => {
        localStorage.removeItem('jwt')
        setToken('')
        setRoles([])
        setUsername('')
        nav("/");
    }

    const login = (gotToken: string) => {
        localStorage.setItem('jwt', gotToken)
        setToken(gotToken);
    }

    return <AuthContext.Provider value={{token, roles, username, logout, login}} >{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)