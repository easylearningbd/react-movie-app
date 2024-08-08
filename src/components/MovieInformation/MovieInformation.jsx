import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOulined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './informationstyles';

const MovieInformation = () => {

    const { id } = useParams();
    const { data, isFetching, error } = useGetMovieQuery(id);
    console.log(data);
    const classes = useStyles();

    if (isFetching) {
        return(
            <Box display='flex' justifyContent='center' alignItems='center'>
                <CircularProgress size='8rem' />
            </Box>
        )
    }
    if (error) {
        <Box display='flex' justifyContent='center' alignItems='center'>
                <Link to='/'>Something has gone wrong - Go Back</Link>
            </Box>
    }

    return (
    <Grid container className={classes.containerSpaceAround}>
        <Grid item sm={12} lg={4} style={{ display: 'flex', marginBottom: '30px' }} >
    <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${data?.poster_path }`} alt="{ data?.title }" />
        </Grid>
    <Grid item container direction='column' lg={7}>
        <Typography variant='h4' align='center' gutterBottom>
            {data?.title} ({data.release_date.split('-')[0] })
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
            {data?.tagline} 
        </Typography>

    <Grid item className={classes.containerSpaceAround}>
        <Box display='flex' align="center">
         <Rating readOnly value={data.vote_average / 2 } />
         <Typography variant='subtitle1' gutterBottom style={{ marginLeft: '10px'  }}>
            {data?.vote_average} / 10
         </Typography>
        </Box>
        <Typography align='center' gutterBottom style={{ fontSize: '16px'  }}>
        {data?.runtime}min | Language: {data?.spoken_languages[0].name}
        </Typography>
    
    </Grid>    


    </Grid>    




    </Grid>
    );
};

export default MovieInformation;