import React, { Component } from 'react';
import classes from './Titlecard.module.css';

class Titlecard extends Component {
    render() {
        return (
            <div id="home" className={classes.Titlecard} style={this.props.scrolled ? {marginTop: '60px'} : null}>
                <div className={classes.TaglineCard}>
                    <h1 className={classes.Tagline}>Fresh Baked Goods Since The 2020 Quarantine!</h1>
                </div>
            </div>
        )
    }
}

export default Titlecard;