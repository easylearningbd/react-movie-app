import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
    movie:{
        padding: '10px',
        paddingLeft: '30px'
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover':{
            cursor: 'pointer'
        }
    },
    image: {
        borderRadius: '20px',
        padding: '10px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    title:{
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        fontSize: '0.845rem',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',

    }
      
    
    
}));