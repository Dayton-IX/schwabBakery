import React from 'react';
import classes from './About.module.css';

const About = (props) => (
    <div className={classes.About}>
        <h1 className={classes.AboutHeader}>About Us <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
    </div>
);

export default About;