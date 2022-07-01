import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import {Menu, MenuItem} from '@mui/material';
import {useAuth} from "../user-management/AuthProvider";

export default function NavBar() {

    const {token, roles, logout} = useAuth();
    const nav = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}

                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                roles.includes("admin") &&
                                <MenuItem onClick={() => nav("/adminpage")}>Admin Page</MenuItem>
                            }
                            <MenuItem onClick={() => nav("/infopage")}>Info Page</MenuItem>
                        </Menu>
                    </div>
                    <Button color="inherit" sx={{ml: 1, mr: 2, flexGrow: 1}} onClick={() => nav("/")}>
                        <Typography variant={"h6"}>
                            Security App
                        </Typography>
                    </Button>
                    {
                        token ?
                            <>
                                <Button color="inherit" size={"small"} onClick={logout}>logout</Button>
                                <PersonIcon onClick={() => nav("/userpage")}/>
                            </>
                            :
                            <>
                                <Button color="inherit" size={"small"} onClick={() => nav("/login")}>Login</Button>
                                <Button color="inherit" size={"small"}
                                        onClick={() => nav("/register")}>Register</Button>
                            </>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}
