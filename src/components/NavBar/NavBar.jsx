import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useStyles from './navstyles';

const NavBar = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();


    return (
        <>
           <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                {isMobile && (
                    <IconButton
                     color='inherit'
                     edge="start"
                     style={{ outline: 'none'}}
                     onClick={() => {}}
                     className={classes.menuButton}
                    >
                       <Menu/> 
                    </IconButton>
                )}
            <IconButton color='inherit' sx={{ ml:1 }} onClick={() => {}}>
                {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/>}
            </IconButton>


            </Toolbar>
           </AppBar>
        </>
    );
};

export default NavBar;