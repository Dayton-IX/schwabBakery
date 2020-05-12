import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './Components/NavBar/NavBar';
import Titlecard from './Components/Titlecard/Titlecard';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';

class App extends Component {
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
			<div className={classes.App}>
				<NavBar scrolled={this.state.scrolled} />
				<Titlecard scrolled={this.state.scrolled} />
				<About />
				<Menu />
				<Contact />
			</div>
		)
	}
};

export default App;