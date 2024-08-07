import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './searchstyles';
import { searchMovie } from '../../features/currentGenreOrCategory';
import { useLocation } from 'react-router-dom';


const Search = () => {
    const [query, setQuery] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
   
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(searchMovie(query));
        }
    };

    if (location.pathname !== '/') return null;  

    return (
        <div className={classes.searchContainer}>
            <TextField
                onKeyPress = {handleKeyPress}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant='standard'
                InputProps={{
                    className: classes.input,
                    startAdornment: (
                        <InputAdornment position='start'>
                        <SearchIcon/>
                        </InputAdornment>
                    )
                }}
            >
                
            </TextField>
            
        </div>
    );
};

export default Search;