import React, { Component } from 'react';
import classes from './Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div className={classes.Contact} id="contact">
                <div className={classes.ContactContent}>
                    <h2 className={classes.ContactHeader}>Contact Us</h2>

                </div>
            </div>
        )
    }
};

export default Contact;