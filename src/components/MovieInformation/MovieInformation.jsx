import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOulined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/TMDB';

const MovieInformation = () => {

    const { id } = useParams();
    const { data, isFetching, error } = useGetMovieQuery(id);
    console.log(data);


    return (
        <div>
            Movie Information {id}
        </div>
    );
};

export default MovieInformation;