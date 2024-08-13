import { useEffect, useContext } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "./utils/ToggleColorMode";
import { fetchToken } from "./utils";
import { searchMovie, selectGenreOrCategory } from "./features/currentGenreOrCategory";

const useAlan = () => {

    const { setMode } = useContext(ColorModeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        alanBtn({
            key: '8e0b083e795c924d0f062a79df525cba2e956eca572e1d8b807a3e2338fdd0dc/stage',
            host: 'v1.alan.app',
            onCommand: ({ command, mode, genres, genreOrCategory,query}) => { 
            if (command === 'chooseGenre') {
                const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());

                if (foundGenre) {
                    navigate('/') ;
                    dispatch(selectGenreOrCategory(foundGenre.id));
                }else{
                    const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
                    navigate('/') ;
                    dispatch(selectGenreOrCategory(category));
                }
            } else if (command === 'changeMode') {
                if (mode === 'light') {
                    setMode('light');
                } else{
                    setMode('dark');
                }
              } else if(command === 'login'){
                fetchToken();
              } else if (command === 'logout') {
                localStorage.clear();
                window.location.href = '/';
              } else if(command === 'search'){
                dispatch(searchMovie(query));
              } 
            }
        });
      }, [navigate,dispatch,setMode]);


    return null;
};

export default useAlan;