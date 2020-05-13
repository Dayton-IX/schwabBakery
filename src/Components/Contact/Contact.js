import React, { Component } from 'react';
import classes from './Contact.module.css';
import contactImg from '../../assets/wrappedBread_edited.jpg';
import axios from '../../secret/axios-mail';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        formValid: false,
        sendRequest: false
    }

    handleEmailChange = function(e) {
        this.setState({email: e.target.value})
    }
    handleNameChange = function(e) {
        this.setState({name: e.target.value})
    }
    handleMessageChange = function(e) {
        this.setState({message: e.target.value})
    }

    mailHandler = (event) => {
        event.preventDefault();
        this.setState({sendRequest: true})
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
            this.setState({formValid: true});
            axios.post('/sendMail', {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <div className={classes.Contact} id="contact">
                <div className={classes.ContactContent}>
                    <h2 className={classes.ContactHeader}>Contact Us</h2>
                    <div className={classes.ContactMain}>
                        <form className={classes.ContactForm} onSubmit={(e) => this.mailHandler(e)}>
                            <input type="text" className={classes.ContactInput} placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameChange(e)}/>
                            <input type="email" className={classes.ContactInput} placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/>
                            <textarea name="message" className={classes.ContactMessage} cols="30" rows="10" placeholder="Message" value={this.state.message} onChange={(e) => this.handleMessageChange(e)}></textarea>
                            <input type="submit" value="Send Us An Email!" className={classes.ContactButton} /> {this.state.sendRequest ? <div className={this.state.formValid ? classes.Success : classes.Error}>{this.state.formValid ? "Email Sent!" : "Please Fill In All Fields."}</div> : null }
                        </form>
                        <img className={classes.ContactImg} src={contactImg} alt="cinnamon rolls" />
                    </div>
                    <div className={classes.FollowUs}>
                        <svg className={classes.Instagram} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#CD486B"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        <p className={classes.FollowUsText}>Follow us on Instagram <a href="https://www.instagram.com/the_schwab_bakery/" target="blank" className={classes.FollowUsLink}>@the_schwab_bakery</a></p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;