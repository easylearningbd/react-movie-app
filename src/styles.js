import { makeStyles } from "@mui/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
    root:{
        display: 'flex',
        height: '100%'
    },
    toolbar:{
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding:theme.spacing(3),
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('sm')]:{
            marginLeft: 0,
            width: '100%'
        }
    }
}));