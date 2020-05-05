import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './Components/NavBar/NavBar';
import Titlecard from './Components/Titlecard/Titlecard';

class App extends Component {
    render() {
		return (
			<div className={classes.App}>
				<NavBar />
				<Titlecard />
			</div>
		)
	}
};

export default App;