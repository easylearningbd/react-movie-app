import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
    moviesContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        }
    },
    moviesContainer:{
        overflow: 'scroll',
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar':{
            display: 'none' // Chrome, safari and opera
        } 
    } 
    
    
}));