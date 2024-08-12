import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import useStyles from './featuredstyles';
import { Link } from 'react-router-dom';

const FeaturedMovie = ({movie}) => {

    const classes = useStyles();

    if(!movie) return null;

    return (
        <Box component={Link} to={`/movie/${movie.id}`} className={classes.featuredCardContainer}>
    <Card className={classes.card} classes={{ root:classes.cardRoot }}>
        <CardMedia
        media="picture"
        alt={movie.title}
        image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        title={movie.title}
        className={classes.cardMedia}
        >
            <Box padding='20px'>
        <CardContent className={classes.cardContent} classes={{ root:classes.cardContentRoot }}>
        <Typography variant='h5' gutterBottom>{ movie.title }</Typography>
        <Typography variant='body2' gutterBottom>{ movie.overview }</Typography>
        </CardContent>
            </Box>
                
        </CardMedia>
    </Card> 

        </Box>
    );
};

export default FeaturedMovie;