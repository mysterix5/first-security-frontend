import {Box, Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import {addRoleWithUsername, deleteRoleWithUsername, deleteUserByUsername} from "../services/apiServices";
import {UserInfo} from "../services/model";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

interface UserInfoPageProps {
    user: UserInfo
    getAllUsers: () => void
}

export default function UserInfoPage(props: UserInfoPageProps) {

    const [roleToAdd, setRoleToAdd] = useState("");

    function deleteUser() {
        deleteUserByUsername(props.user.username)
            .then(props.getAllUsers)
    }

    function deleteRole(role: string) {
        deleteRoleWithUsername(props.user.username, role)
            .then(props.getAllUsers);
    }

    function addRole() {
        if(roleToAdd){
        addRoleWithUsername(props.user.username, roleToAdd)
            .then(props.getAllUsers);
        }
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
                        props.user.roles.map(r =>
                            <Grid container key={r}>
                                <Grid item>
                                    <Typography>{r}</Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={()=>deleteRole(r)}>
                                        <DeleteForeverIcon/>
                                    </Button>
                                </Grid>
                            </Grid>
                        )
                    }
                    <Box component={"form"} onSubmit={addRole}>
                    <Grid container>
                        <Grid item>
                            <TextField
                                label="Role"
                                variant="outlined"
                                size="small"
                                onChange={event => setRoleToAdd(event.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <Button type={"submit"}>
                                <AddIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                    </Box>
                    <Button variant={"contained"} onClick={() => deleteUser()}>
                        delete
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}