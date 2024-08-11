import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from './pagistyles';

const Pagination = ({ currentPage,setPage,totalPages }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button className={classes.button} variant='contained' color="primary" type='button'> Prev </Button>
        
        <Typography variant='h4' className={classes.pageNumber}>
        {currentPage}
        </Typography>

            <Button className={classes.button} variant='contained' color="primary" type='button'> Next </Button>
           
        </div>
    );
};

export default Pagination;