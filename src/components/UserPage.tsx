import {Button, Typography } from "@mui/material";
import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/apiServices";


export default function UserPage(){
    const [username, setUsername] = useState('')
    const nav = useNavigate();
    
    useEffect(()=>{
            getUser()
                .then(user => setUsername(user))
        }, [])

    return (
        <>
            <Typography variant={"h1"} gutterBottom>
                User page
            </Typography>
            {
                username ?
                    <Typography>
                        You are logged in: Username: {username}
                    </Typography>
                    :
                    <Typography>
                        You are not logged in
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