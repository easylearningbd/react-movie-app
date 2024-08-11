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
        query: ({genreIdOrCategoryName,page,searchQuery}) => {
     

            // Get Movies BY Search
            if (searchQuery) {
                return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
            }

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

    // Get Movie Details 
    getMovie: builder.query({
        query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
    }),

     // Get  Recommendation Movies 
     getRecommendations: builder.query({
        query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`
    }),

    // Get Actor Details 
    getActorsDetails: builder.query({
        query: ( id ) => `/person/${id}?api_key=${tmdbApiKey}`
    }),

    // Get Actor Movie List 
    getMoviesByActorId: builder.query({
        query: ( { id, page} ) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
    }),

     // Get User Favarate Specific list 
     getList: builder.query({
        query: ( { listName, accountId, sessionId, page } ) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`
    }),





    }),
});

export const { useGetMoviesQuery, useGetGenresQuery,useGetMovieQuery,useGetRecommendationsQuery, useGetActorsDetailsQuery, useGetMoviesByActorIdQuery, useGetListQuery } = tmdbApi;

