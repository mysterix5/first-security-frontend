import {Button, Grid, Typography } from "@mui/material";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/apiServices";
import { UserInfo } from "../services/model";
import UserInfoPage from "./UserInfoPage";


export default function AdminPage(){
    const [users, setUsers] = useState<UserInfo[]>()
    const nav = useNavigate();

    useEffect(()=>{
        loadAllUsers();
    }, [])

    function loadAllUsers(){
        getAllUsers()
            .then(users => setUsers(users));
    }

    return (
        <>
            <Typography variant={"h1"} gutterBottom>
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
            <Button variant={"contained"} onClick={() => nav("/")}>
                Back to main page
            </Button>
            {
                localStorage.getItem("jwt") &&
                <Button variant={"contained"} onClick={() => {
                    localStorage.clear();
                    nav("/");
                }}>
                    logout
                </Button>
            }
        </>
    )
}