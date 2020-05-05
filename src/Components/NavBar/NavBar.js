import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
    <div className={classes.NavBar}>
        <div className={classes.NavItems}>
            <NavLink className={classes.Link} activeClassName={classes.ActiveLink} to='/' exact>Home <hr className={classes.ActiveUnderline} /></NavLink>
            <NavLink className={classes.Link} activeClassName={classes.ActiveLink} to='/about'>About <hr className={classes.ActiveUnderline} /></NavLink>
            <span className={classes.CenterLogo}>
                <p className={classes.Est}>EST. 2020</p>
                <h3 className={classes.LogoHeader}>The Schwab Bakery</h3>
                <p className={classes.Smithfield}><hr className={classes.SmithfieldHr} /> Smithfield UT <hr className={classes.SmithfieldHr} /></p>
            </span>
            <NavLink className={classes.Link} activeClassName={classes.ActiveLink} to='/menu'>Menu <hr className={classes.ActiveUnderline} /></NavLink>
            <NavLink className={classes.Link} activeClassName={classes.ActiveLink} to='/contact'>Contact <hr className={classes.ActiveUnderline} /></NavLink>
        </div>
    </div>
);

export default NavBar;