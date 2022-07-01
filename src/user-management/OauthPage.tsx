import {Box, Button, CircularProgress, Typography} from "@mui/material";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {githubOauthRequest} from "../services/apiServices";


export default function OauthPage() {
    const nav = useNavigate();
    const loc = useLocation();
    const code = loc.search;

    useEffect(()=>{

        }
    , [nav, code])

    function requestToGithub(){
        githubOauthRequest(code)
            .then(r => {
                console.log(r);
                localStorage.setItem("jwt", r.token);
                return r;
            })
            .then(()=>nav("/userpage"));
    }

    return (
        <>
            <Typography variant={"h3"}>
                Oauth sign in
            </Typography>

            <Button onClick={requestToGithub}>
                request to Github
            </Button>

            <Box sx={{mt: 5}}>
                <CircularProgress/>
            </Box>
        </>
    )
}