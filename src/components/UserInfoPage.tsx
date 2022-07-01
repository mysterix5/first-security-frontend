import {Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { deleteUserByUsername } from "../services/apiServices";
import { UserInfo } from "../services/model";

interface UserInfoPageProps{
    user: UserInfo
    getAllUsers: ()=>void
}

export default function UserInfoPage(props: UserInfoPageProps) {
    
    function deleteUser(){
        deleteUserByUsername(props.user.username)
            .then(props.getAllUsers)
    }
    
    return (
        <Grid item>
            <Card>
                <CardContent>
                    <Typography variant={"h4"}>
                        {
                            props.user.username
                        }
                    </Typography>
                    <Typography variant={"h6"}>
                        Roles:
                    </Typography>
                    {
                        props.user.roles.map(r => <Typography key={r}>{r}</Typography>
                        )
                    }
                    <Button variant={"contained"} onClick={() => deleteUser()}>
                        delete
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}