import React from 'react';
import { Box, Button, CircularProgress, Grid, Typography }  from '@mui/material';
import { ArrowBack, Gif } from '@mui/icons-material';
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
  <>
 <Grid container spacing={3} >
    <Grid item lg={5} xl={4}>
        <img className={classes.image} src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} alt="" />
    </Grid>

    <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant='h3' gutterBottom>
            {data?.name}
        </Typography>
        <Typography variant='h5' gutterBottom>
            Born:  {new Date(data?.birthday).toDateString()}
        </Typography>
        <Typography variant='body1' align='justify' paragraph>
            {data?.biography || 'Sorry, No Biography yet...'}
        </Typography>

    <Box marginTop='2rem' display='flex' justifyContent='space-around'>
        <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id }`}>
        IMDB
        </Button>
        <Button startIcon={<ArrowBack/>} onClick={() => navigate(-1)} color='primary'>Go Back</Button>

    </Box>

    </Grid>


  </Grid>
            
   </>
    );
};

export default Actors; 