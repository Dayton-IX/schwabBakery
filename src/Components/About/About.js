import React from 'react';
import classes from './About.module.css';
import bread from '../../assets/ovenBread.png';

const About = (props) => (
    <div className={classes.About}>
        <h1 className={classes.AboutHeader}>About Us <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
        <div className={classes.AboutSection}>
            <div className={classes.AboutText}>
                <p className={classes.AboutP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Non sodales neque sodales ut etiam sit amet. Elementum pulvinar etiam non quam lacus. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Elementum nibh tellus molestie nunc. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Bibendum est ultricies integer quis auctor elit sed vulputate. Amet facilisis magna etiam tempor orci eu lobortis elementum. Sit amet nisl purus in mollis nunc sed. Gravida arcu ac tortor dignissim convallis aenean et. Ac orci phasellus egestas tellus rutrum. Dictum fusce ut placerat orci nulla pellentesque.</p>
                <p className={classes.AboutP}>Quisque egestas diam in arcu cursus euismod. Auctor neque vitae tempus quam pellentesque nec. Velit ut tortor pretium viverra suspendisse potenti nullam. Massa tempor nec feugiat nisl pretium fusce. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. At lectus urna duis convallis. Sit amet nulla facilisi morbi tempus iaculis urna. Et malesuada fames ac turpis egestas maecenas pharetra convallis.. Et malesuada fames ac turpis egestas. Accumsan lacus vel facilisis volutpat est velit egestas. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.</p>
            </div>
            <div className={classes.AboutImgBackground}>
                <img className={classes.AboutImg} src={bread} alt="bread"/>
            </div>
        </div>
    </div>
);

export default About;