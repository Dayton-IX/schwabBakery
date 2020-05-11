import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './Components/NavBar/NavBar';
import Titlecard from './Components/Titlecard/Titlecard';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';

class App extends Component {
    render() {
		return (
			<div className={classes.App}>
				<NavBar />
				<Titlecard />
				<About />
				<Menu />
				<Contact />
			</div>
		)
	}
};

export default App;