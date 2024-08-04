import React from 'react';
import { Divider, List,ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles';
import { Link } from 'react-router-dom';

const redLogo = 'https://i.ibb.co/ft4skBS/logored.png';
const blueLogo = 'https://i.ibb.co/5K6vdzx/logoblue.png';

const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' }
]

const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' }
]

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <>
          <Link to="/" className={classes.imageLink} >
          <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="EasyLogo" /> 
          </Link>

          <Divider/>

        <List>
            <ListSubheader>Categories </ListSubheader>
            {demoCategories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
                
                </Link>
            ) )}
       </List> 

        <Divider/>

        <List>
            <ListSubheader>Genres </ListSubheader>
            {categories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
                
                </Link>
            ) )}
       </List>   

        </>
    );
};

export default Sidebar;