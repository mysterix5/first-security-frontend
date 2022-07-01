import {Button, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React from "react";


export default function MainPage() {

    const nav = useNavigate();

    return (
        <>
            <Typography variant={"h3"} gutterBottom>
                Main page
            </Typography>
            <Grid container>
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => nav("/")}>
                        Main page
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => nav("/infopage")}>
                        Info page
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => nav("/login")}>
                        Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => nav("/register")}>
                        Register
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => nav("/userpage")}>
                        User page
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={"contained"} onClick={() => nav("/adminpage")}>
                        Admin page
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}