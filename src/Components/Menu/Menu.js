import React, { Component } from 'react';
import classes from './Menu.module.css';
import breadImg from '../../assets/bread_edited.jpg';
import moreImg from '../../assets/cinnamonRolls.JPG';
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
                <div className={classes.MenuContainer}>
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
                        <img className={classes.MenuImg} src={breadImg} alt="bread" />
                        {/* { this.state.breadActive ? <img className={classes.MenuImg} src={breadImg} alt="bread" /> : <img className={classes.MenuImg} src={moreImg} alt="dessert breads" />} */}
                        {/* <img className={this.state.breadActive ? classes.BreadImg : classes.DessertImg } src={breadImg} alt="bread" /> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Menu;