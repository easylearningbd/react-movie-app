import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
  
const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
   <App/>
   </ThemeProvider>
   </Provider>
  
);

 
