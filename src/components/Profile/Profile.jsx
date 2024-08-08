import React from 'react';
import { Typography,Button,Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

const Profile = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }


    return (
    <Box>
        <Box display="flex" justifyContent="space-between" >
            <Typography variant='h6' gutterBottom> My Profile </Typography>
            <Button color='inherit' onClick={logout}>
               Logout &nbsp; <ExitToApp/>
            </Button>
        </Box>
    
    </Box>
    );
};

export default Profile; 