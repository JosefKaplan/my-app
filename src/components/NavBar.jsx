import React from 'react';

//Buttons
import CustomBtn from './CustomBtn';

import { Link } from 'react-router-dom';

//Loga
import logo from '../logo.svg';
import logoMobile from '../logoMobile.svg';

//Material-UI
// eslint-disable-next-line
import {Toolbar, Typography} from '@material-ui/core'; // eslint-disable-next-line
import {makeStyles} from "@material-ui/core/styles"; 

function NavBar() {
    const styles = makeStyles({
        bar:{
            paddingTop: "1.15rem",
            backgroundColor: "#fff",// eslint-disable-next-line
            ['@media (max-width:780px)']: { 
               flexDirection: "column"
              }
        },
        logo: {
            width: "75%", // eslint-disable-next-line
            ['@media (max-width:780px)']: { 
               display: "none"
               }
        },
        logoMobile:{
            width: "100%", 
            display: "none", // eslint-disable-next-line
            ['@media (max-width:780px)']: { 
                display: "inline-block",
                }
        },
    })
    const classes = styles()
    const navStyle = {
        textDecoration: "none",
        paddingLeft: "1em",
        margin: "1em",
        "&:hover": {
            textDecoration:  "none"
        },
    }
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
                    <Link to='/'>
                        <img src={logo} className={classes.logo} alt={"logo"}/>
                    </Link>
                    <Link to='/'>
                        <img src={logoMobile} className={classes.logoMobile} alt={"mobile-logo"}/>
                    </Link>
                    <Link to='/about' style={navStyle}>
                        <CustomBtn txt="About us"/>
                    </Link>
                    <Link to ='/Shop' style={navStyle}>
                        <CustomBtn txt="Shop"/>
                    </Link>
                    <Link to ='Careers' style={navStyle}>
                        <CustomBtn txt="Careers"/>
                    </Link>
                    <Link to ='Contact' style={navStyle}>
                        <CustomBtn txt="Contact us"/>
                    </Link>
                
            </Toolbar>
    )
}

export default NavBar