import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function MainPage(){

    const nav = useNavigate();

    return (
        <>
            <Typography variant={"h1"} gutterBottom>
                Main page
            </Typography>
            <Button variant={"contained"} onClick={()=>nav("/login")}>
                Login
            </Button>
            <Button variant={"contained"} onClick={()=>nav("/register")}>
                Register
            </Button>
            <Button variant={"contained"} onClick={()=>nav("/userpage")}>
                User page
            </Button>
            <Button variant={"contained"} onClick={()=>nav("/adminpage")}>
                Admin page
            </Button>
        </>
    )
}