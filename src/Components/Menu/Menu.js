import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => (
    <div className={classes.Menu}>
        <h1 className={classes.MenuHeader}>Menu <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
        <div className={classes.MenuNav}>
            <div className={classes.MenuNavItems}>
                <NavLink to={{pathname: '/menu/bread'}} exact className={classes.MenuLink} activeClassName={classes.MenuLinkActive} >Bread</NavLink>
                <NavLink to={{pathname: '/menu/desserts'}} exact className={classes.MenuLink} activeClassName={classes.MenuLinkActive} >Desserts</NavLink>
            </div>
        </div>
    </div>
);

export default Menu;