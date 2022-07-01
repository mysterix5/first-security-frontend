import {Grid, Typography } from "@mui/material";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/apiServices";
import { UserInfo } from "../services/model";
import UserInfoPage from "./UserInfoPage";
import {useAuth} from "../user-management/AuthProvider";


export default function AdminPage(){
    const [users, setUsers] = useState<UserInfo[]>()

    const {roles} = useAuth();

    const nav = useNavigate();

    useEffect( () => {
            if (!roles.includes("admin")) nav("/")
        }
        , [roles, nav])


    useEffect(()=>{
        loadAllUsers();
    }, [])

    function loadAllUsers(){
        getAllUsers()
            .then(users => setUsers(users));
    }

    return (
        <>
            <Typography variant={"h3"} gutterBottom>
                Admin page
            </Typography>
            {
                users ?
                    <Grid container spacing={2}>
                        {
                            users.map(u=><UserInfoPage key={u.username} user={u} getAllUsers={loadAllUsers}/>)
                        }
                    </Grid>
                    :
                    <Typography>
                        You need admin rights to see this page
                    </Typography>
            }
        </>
    )
}