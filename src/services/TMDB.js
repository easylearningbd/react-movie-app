import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3'}), endpoints: (builder) => ({

         // Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        }),
       
    // Get Movies By Type
    getMovies: builder.query({
        query: ({genreIdOrCategoryName,page}) => {
     
            // Get Movies BY Category
            if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
            }

            // Get Movies BY genre
            if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
            }
            // Get Populer Movies
            return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;

        }
    }),

    }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;

