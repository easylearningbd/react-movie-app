import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import NavBar from './components/NavBar/NavBar';
import MovieInformation from './components/MovieInformation/MovieInformation';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div>
            <CssBaseline />
            <BrowserRouter>
                <NavBar/>
                <main>
                  <div>
                <Routes>
                    <Route path='/movie/:id' element={<MovieInformation/>} />
                    <Route path='/' element={<Movies/>} /> 
                    <Route path='/actors/:id' element={<Actors/>} />
                    <Route path='/profile/:id' element={<Profile/>} /> 
                </Routes>
                </div>
                </main>
            </BrowserRouter>
            
        </div>
    );
};

export default App;