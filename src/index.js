import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import './index.css';
import ToggleColorModeProvider from './utils/ToggleColorMode';
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
   <App/>
   </ToggleColorModeProvider>
   </Provider>
  
);

 
