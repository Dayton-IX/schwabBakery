import React from 'react';

import classes from './MenuItem.module.css';

const MenuItem = (props) => (
    <div className={classes.MenuItem}>
        <h2 className={classes.MenuItemHeader}>{props.name}</h2>
        <p className={classes.MenuItemText}>{props.desc}</p>
        <span className={classes.MenuPriceLine}><hr className={classes.MenuItemHr} /><p className={classes.MenuItemPrice}>{props.price}</p></span>
    </div>
);

export default MenuItem;