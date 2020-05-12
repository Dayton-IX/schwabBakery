import React, { Component } from 'react';
import classes from './Titlecard.module.css';

class Titlecard extends Component {
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
            <div className={classes.Titlecard} style={this.state.scrolled ? {paddingTop: '60px'} : null}>
                <div className={classes.TaglineCard}>
                    <h1 className={classes.Tagline}>Fresh Baked Goods Since The 2020 Quarantine!</h1>
                </div>
            </div>
        )
    }
}

export default Titlecard;