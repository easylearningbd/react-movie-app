import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import useStyles from './navstyles';

const NavBar = () => {

    const classes = useStyles();


    return (
        <>
           <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>

            </Toolbar>
           </AppBar>
        </>
    );
};

export default NavBar;