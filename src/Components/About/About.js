import React from 'react';
import classes from './About.module.css';
import bread from '../../assets/ovenBread.png';
import { NavLink } from 'react-router-dom';

const About = (props) => (
    <div className={classes.About}>
        <h1 className={classes.AboutHeader}>About Us <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
        <div className={classes.AboutSection}>
            <div className={classes.AboutText}>
                <p className={classes.AboutP}>Our mom has baked bread for many years and have always wanted to give it a try. Jacob is 15 and a freshman. Before the quarantine he loved to swim on the swim team. Allie is 13 and in 7th grade and before quarantine she loved to dance. With the pandemic they found that they had a lot of time on their hands and so the Schwab Bakery was born!</p>
                <p className={classes.AboutP}>We bake on Tuesdays and Thursdays every week. We follow Cottage Laws for the state of Utah and each have food handler's permits. Please <NavLink to="/contact" >Contact Us</NavLink> if you are interested or have any special requests! </p>
            </div>
            <div className={classes.AboutImgBackground}>
                <img className={classes.AboutImg} src={bread} alt="bread"/>
            </div>
        </div>
    </div>
);

export default About;