import React from 'react';
import classes from './Titlecard.module.css';

const Titlecard = (props) => (
    <div className={classes.Titlecard}>
        <div className={classes.TaglineCard}>
            <h1 className={classes.Tagline}>Fresh Baked Goods Since The 2020 Quarantine!</h1>
        </div>
    </div>
);

export default Titlecard;