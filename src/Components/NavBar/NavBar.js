import React, { Component } from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 1;
            if (isTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false});
            }
        });
    }

    render() {
        return (
            <div className={this.state.scrolled ? classes.StickyNavBar : classes.NavBar}>
                <div className={classes.NavItems}>
                    <a className={classes.Link} href='/' exact>Home <hr className={classes.ActiveUnderline} /></a>
                    <a className={classes.Link} href='#about'>About <hr className={classes.ActiveUnderline} /></a>
                    <span className={classes.CenterLogo}>
                        <p className={classes.Est}>EST. 2020</p>
                        <h3 className={classes.LogoHeader}>The Schwab Bakery</h3>
                        <p className={classes.Smithfield}><hr className={classes.SmithfieldHr} /> Smithfield UT <hr className={classes.SmithfieldHr} /></p>
                    </span>
                    <a className={classes.Link} href='#menu'>Menu <hr className={classes.ActiveUnderline} /></a>
                    <a className={classes.Link} href='#contact'>Contact <hr className={classes.ActiveUnderline} /></a>
                </div>
            </div>
        )
    }
}

export default NavBar;