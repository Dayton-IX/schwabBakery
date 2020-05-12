import React, { Component } from 'react';
import classes from './Menu.module.css';
import breadPlaceholder from '../../assets/breadPlaceholder.jpg';
import morePlaceholder from '../../assets/morePlaceholder.jpg';
import BreadItems from './BreadItems/BreadItems';
import MoreItems from './MoreItems/MoreItems';

class Menu extends Component {
    state = {
        breadActive: true,
        moreActive: false
    }

    breadClicked = () => {
        this.setState({breadActive: true, moreActive: false})
    }

    moreClicked = () => {
        this.setState({breadActive: false, moreActive: true})
    }

    render() {
        return (
            <div className={classes.Menu} id="menu">
                <h1 className={classes.MenuHeader}>Menu <span className="sectionLine"><div className="circle"></div><hr className="sectionHr"/><div className="circle"></div></span></h1>
                <div className={classes.MenuNav}>
                    <div className={classes.MenuNavItems}>
                        <button className={this.state.breadActive ? classes.MenuLinkActive : classes.MenuLink} onClick={this.breadClicked}>Bread</button>
                        <button className={this.state.moreActive ? classes.MenuLinkActive : classes.MenuLink} onClick={this.moreClicked}>More</button>
                    </div>
                </div>
                <div className={classes.MenuMain}>
                    <div className={classes.MenuItems} >
                        {this.state.breadActive ? <BreadItems /> : <MoreItems />}
                    </div>
                    { this.state.breadActive ? <img className={classes.MenuImg} src={breadPlaceholder} alt="bread" /> : <img className={classes.MenuImg} src={morePlaceholder} alt="dessert breads" />}
                </div>
            </div>
        )
    }
};

export default Menu;