import React from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {

    const { data } = useGetMoviesQuery();
    console.log(data);

    return (
        <div>
            <h1>Movies Page </h1>
        </div>
    );
};

export default Movies;