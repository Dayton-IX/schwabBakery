import React from 'react';
import classes from './Menu.module.css';
import { NavLink, Route } from 'react-router-dom';
import breadPlaceholder from '../../assets/breadPlaceholder.jpg';
import BreadItems from './BreadItems/BreadItems';
import MoreItems from './MoreItems/MoreItems';

const Menu = (props) => {
    return (
        <div className={classes.Menu}>
            <h1 className={classes.MenuHeader}>Menu <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
            <div className={classes.MenuNav}>
                <div className={classes.MenuNavItems}>
                    <NavLink to={{pathname: '/'}} exact className={classes.MenuLink} activeClassName={classes.MenuLinkActive} >Bread</NavLink>
                    <NavLink to={{pathname: '/more'}} exact className={classes.MenuLink} activeClassName={classes.MenuLinkActive} >More</NavLink>
                </div>
            </div>
            <div className={classes.MenuMain}>
                <div className={classes.MenuItems} >
                    <Route path="/" component={BreadItems} />
                    <Route path="/more" component={MoreItems} />
                </div>
                <img className={classes.MenuImg} src={breadPlaceholder} alt="bread" />
            </div>
        </div>
    )
};

export default Menu;