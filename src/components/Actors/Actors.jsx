import React from 'react';
import { Box, Button, CircularProgress, Grid, Typography }  from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import useStyles from './actorstyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetActorsDetailsQuery } from '../../services/TMDB';
 

const Actors = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const classes = useStyles();
    const { data, isFetching, error} = useGetActorsDetailsQuery(id);
    //  console.log(data);

    if (isFetching) {
        return ( 
            <Box display="flex" justifyContent='center'>
                <CircularProgress size='8rem' />
            </Box>
        );
    }
    if (error) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center'>
            <Button startIcon={<ArrowBack/>} onClick={() => navigate(-1)} color='primary'>Go Back</Button>
            </Box>
        ) 
    }


    return (
        <div>
            <h1>Actros Page </h1>
        </div>
    );
};

export default Actors; 