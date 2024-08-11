import React from 'react';
import { Box, Button, CircularProgress, Grid, Typography }  from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import useStyles from './actorstyles';
import { useNavigate, useParams } from 'react-router-dom';
 

const Actors = () => {
    const { id } = useParams();
    console.log(id);
    const classes = useStyles();



    return (
        <div>
            <h1>Actros Page </h1>
        </div>
    );
};

export default Actors; 