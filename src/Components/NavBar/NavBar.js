import React from 'react';
import classes from './NavBar.module.css';

const NavBar = (props) => (
    <div className={classes.NavBar}>
        <div className={classes.NavItems}>
            <a className={classes.Link} href='#home'>Home</a>
            <a className={classes.Link} href='#about'>About</a>
            <span className={classes.CenterLogo}>
                <p className={classes.Est}>EST. 2020</p>
                <h3 className={classes.LogoHeader}>The Schwab Bakery</h3>
                <p className={classes.Smithfield}><hr className={classes.SmithfieldHr} /> Smithfield UT <hr className={classes.SmithfieldHr} /></p>
            </span>
            <a className={classes.Link} href='#menu'>Menu</a>
            <a className={classes.Link} href='#contact'>Contact</a>
        </div>
    </div>
);

export default NavBar;