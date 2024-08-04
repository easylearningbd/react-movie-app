import React from 'react';
import { Typography, Grid, Grow, Tooltip,Rating } from '@mui/material';
import useStyles from './moviestyles'
import { Link } from 'react-router-dom';

const Movie = ({ movie, i }) => {
    const classes = useStyles();

    return (
         <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
            <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
        <img className={classes.image} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://i.ibb.co/ft4skBS/logored.png' } alt={movie.title} />
        <Typography className={classes.title}>{movie.title}</Typography>
        </Link>
            </Grow>

         </Grid>
    );
};

export default Movie;