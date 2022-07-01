import {Typography } from "@mui/material";
import {useEffect, useState } from "react";
import { getUser } from "../services/apiServices";


export default function UserPage(){
    const [username, setUsername] = useState('')

    useEffect(()=>{
            getUser()
                .then(user => setUsername(user))
        }, [])

    return (
        <>
            <Typography variant={"h3"} gutterBottom>
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
        </>
    )
}