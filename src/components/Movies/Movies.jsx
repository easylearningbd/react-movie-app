import React, { useState } from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux';

const Movies = () => {

    const [page, setPage] = useState(1);
    const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

    const { data, error, isFetching } = useGetMoviesQuery({genreIdOrCategoryName,page});
    // console.log(data);

    if (isFetching) {
        return ( 
            <Box display="flex" justifyContent="center">
                <CircularProgress size="4rem" />
            </Box>
        );
    }

    if (!data.results.length) {
        return (
            <Box display="flex" alignItems="center" mt="20px">
                <Typography variant='h4'>
            No Moveis That Match the name <br />
            Please search for somthing ele 
                </Typography>
            </Box>
        );
    }

    if (error) return 'An Error Has Occured.' 

    return (
        <div>
             <MovieList movies={data} />
        </div>
    );
};

export default Movies;