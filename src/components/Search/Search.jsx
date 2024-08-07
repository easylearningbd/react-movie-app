import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './searchstyles';


const Search = () => {
    const [query, setQuery] = useState('');
    const classes = useStyles();

    const handleKeyPress = () => {

    };

    return (
        <div className={classes.searchContainer}>
            <TextField
                onKeyPress = {handleKeyPress}
                value={query}
                onChange={() => {}}
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