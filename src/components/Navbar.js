import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  img: {
    width: '48px',
    height: '48px',
    margin: '0px 20px',
  },
  home: {
    color: '#3A1212',
    textDecoration: 'none',
    borderBottom: '3px solid #FF2625',
  },
  exercise: {
    color: '#3A1212',
    textDecoration: 'none',
  },
  mains: {
    display: 'flex',
    flexDirection: 'row',
 
  },
  smalls: {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    alignItems: 'center', 
    fontSize: '24px',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mains} sx={{gap:{sm:'122px',sx:'40px',},mt:{sm:'32px',xs:'20px'}, justifyContent:'none'}}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={classes.img} />
      </Link>
      <Box className={classes.smalls}>
        <Link to="/" className={classes.home}>Home</Link>
        <Link to="/#exercises" className={classes.exercise}>Exercises</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
