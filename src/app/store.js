import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrCategory from "../features/currentGenreOrCategory";

export default configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        currentGenreOrCategory: genreOrCategory,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(tmdbApi.middleware),
})