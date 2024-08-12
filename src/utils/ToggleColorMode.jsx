import React,{useState, useMemo, createContext} from 'react';
import { ThemeProvider,createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {

    const [mode, setMode] = useState(() => {
        return localStorage.getItem('themeMode') || 'light';
    });

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode',newMode);
            return newMode;
        })
    };

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }),[mode]);
 
    return (
        <ColorModeContext.Provider value={{ mode, setMode,toggleColorMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider> 
        </ColorModeContext.Provider>
    );
};

export default ToggleColorMode;