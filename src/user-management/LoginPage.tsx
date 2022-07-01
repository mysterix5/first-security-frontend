import { AccountCircle, Key } from "@mui/icons-material";
import {Box, Button, Grid, InputAdornment, Link, TextField, Typography} from "@mui/material";
import {FormEvent, useState } from "react";
import {useNavigate} from "react-router-dom";
import { sendLogin } from "../services/apiServices";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        sendLogin({username, password})
            .then(r => {
                console.log(r);
                localStorage.setItem("jwt", r.token);
                return r;
            })
            .then(()=>nav("/userpage"));
    }

    return (
        <>
            <Typography variant={"h3"} gutterBottom>
                Login page
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit} sx={{mt:7}}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Key/>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{height: "39px"}}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Link href={"https://github.com/login/oauth/authorize?client_id=36f80ad5d6db74b4b0d3"}>
            <Box component="img"
                 alt="Github Logo"
                 src="GitHub-Mark-64px.png"
                 sx={{m:3}}
            />
            </Link>
            <div/>
            <Button variant={"contained"} onClick={() => nav("/")}>
                Back to main page
            </Button>
        </>
    )
}