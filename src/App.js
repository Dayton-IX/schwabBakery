import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
    render() {
		return (
			<div className={classes.App}>
				<NavBar />
			</div>
		)
	}
};

export default App;