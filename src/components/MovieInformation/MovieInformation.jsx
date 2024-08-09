import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOulined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './informationstyles';
import genreIcons from '../../assets/genres';
import { useDispatch } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const MovieInformation = () => {

    const { id } = useParams();
    const { data, isFetching, error } = useGetMovieQuery(id);
    console.log(data);
    const classes = useStyles();
    const dispatch = useDispatch();

    if (isFetching) {
        return(
            <Box display='flex' justifyContent='center' alignItems='center'>
                <CircularProgress size='8rem' />
            </Box>
        )
    }
    if (error) {
        <Box display='flex' justifyContent='center' alignItems='center'>
                <Link to='/'>Something has gone wrong - Go Back</Link>
            </Box>
    }

    return (
    <Grid container className={classes.containerSpaceAround}>
        <Grid item sm={12} lg={4} style={{ display: 'flex', marginBottom: '30px' }} >
    <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${data?.poster_path }`} alt="{ data?.title }" />
        </Grid>
    <Grid item container direction='column' lg={7}>
        <Typography variant='h4' align='center' gutterBottom>
            {data?.title} ({data.release_date.split('-')[0] })
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
            {data?.tagline} 
        </Typography>

    <Grid item className={classes.containerSpaceAround}>
        <Box display='flex' align="center">
         <Rating readOnly value={data.vote_average / 2 } />
         <Typography variant='subtitle1' gutterBottom style={{ marginLeft: '10px'  }}>
            {data?.vote_average} / 10
         </Typography>
        </Box>
        <Typography align='center' gutterBottom style={{ fontSize: '16px'  }}>
        {data?.runtime}min | Language: {data?.spoken_languages[0].name}
        </Typography> 
    </Grid>    

    <Grid item className={classes.genresContainer}>
        {data?.genres?.map((genre) => (
            <Link 
            key={genre.name}
            className={classes.links}
            to='/'
            onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
                <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30}  />
                <Typography color='textPrimary' variant='subtitle1'>
                {genre?.name}
                </Typography>
            </Link>
        ))}
    </Grid>

    <Typography variant='h5' gutterBottom style={{ marginTop: '10PX' }}>
        OverView
    </Typography>
    <Typography style={{ marginBottom: '2rem' }}>
    {data?.overview}
    </Typography> 

    <Typography variant='h5' gutterBottom>Top Cast</Typography>
    <Grid item container spacing={2}>
        {data && data.credits.cast.map((character,i) => (
            character.profile_path && (
                <Grid item key={i} xs={4} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }} >
                    <img className={classes.castImage} src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.className} />
                    <Typography color='textPrimary'>
                    {character.name}
                    </Typography>
                    <Typography color='textSecondary'>
                    {character.character.split('/')[0]}
                    </Typography>

                </Grid>
            )
        )).slice(0,6)}
    </Grid>


<Grid item container style={{ marginTop: '2rem' }}>
    <div className={classes.buttonsContainer}>
        <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
            <ButtonGroup size='small' variant='outlined'>
                <Button target='_blank' rel='noopener noreferrer' href={data?.homepage} endIcon={<Language/>}> Website </Button>

                <Button target='_blank' rel='noopener noreferrer' href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon/>}> IMDB </Button>

                <Button onClick={() => {}} href="#" endIcon={<Theaters/>}> Trailer </Button>

            </ButtonGroup>

        </Grid>

    </div>

</Grid>



    </Grid>   
    </Grid>
    );
};

export default MovieInformation;