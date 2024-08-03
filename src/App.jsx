import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import NavBar from './components/NavBar/NavBar';
import MovieInformation from './components/MovieInformation/MovieInformation';
import Profile from './components/Profile/Profile';
import useStyles from './styles';

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <BrowserRouter>
                <NavBar/>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                <Routes>
                    <Route path='/movie/:id' element={<MovieInformation/>} />
                    <Route path='/' element={<Movies/>} /> 
                    <Route path='/actors/:id' element={<Actors/>} />
                    <Route path='/profile/:id' element={<Profile/>} /> 
                </Routes> 
                </main>
            </BrowserRouter>
            
        </div>
    );
};

export default App;