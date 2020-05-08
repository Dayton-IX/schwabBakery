import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import breadPlaceholder from '../../assets/breadPlaceholder.jpg';

const Menu = (props) => {
    return (
        <div className={classes.Menu}>
            <h1 className={classes.MenuHeader}>Menu <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
            <div className={classes.MenuNav}>
                <div className={classes.MenuNavItems}>
                    <NavLink to={{pathname: '/menu/bread'}} exact className={classes.MenuLink} activeClassName={classes.MenuLinkActive} >Bread</NavLink>
                    <NavLink to={{pathname: '/menu/desserts'}} exact className={classes.MenuLink} activeClassName={classes.MenuLinkActive} >Desserts</NavLink>
                </div>
            </div>
            <div className={classes.MenuMain}>
                <div className={classes.MenuItems} >
                    <div className={classes.MenuItem}>
                        <h2 className={classes.MenuItemHeader}>Menu Item</h2>
                        <p className={classes.MenuItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span className={classes.MenuPriceLine}><hr className={classes.MenuItemHr} /><p className={classes.MenuItemPrice}>$9.99</p></span>
                    </div>
                    <div className={classes.MenuItem}>
                        <h2 className={classes.MenuItemHeader}>Menu Item</h2>
                        <p className={classes.MenuItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span className={classes.MenuPriceLine}><hr className={classes.MenuItemHr} /><p className={classes.MenuItemPrice}>$9.99</p></span>
                    </div>
                    <div className={classes.MenuItem}>
                        <h2 className={classes.MenuItemHeader}>Menu Item</h2>
                        <p className={classes.MenuItemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span className={classes.MenuPriceLine}><hr className={classes.MenuItemHr} /><p className={classes.MenuItemPrice}>$9.99</p></span>
                    </div>
                </div>
                <img className={classes.MenuImg} src={breadPlaceholder} alt="bread" />
            </div>
        </div>
    )
};

export default Menu;