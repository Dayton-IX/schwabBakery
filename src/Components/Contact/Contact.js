import React, { Component } from 'react';
import classes from './Contact.module.css';
import contactPlaceholder from '../../assets/contactPlaceholder.jpg';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        formValid: false
    }

    handleEmailChange = function(e) {
        this.setState({email: e.target.value})
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
            this.setState({formValid: true});
        }
      }
      handleNameChange = function(e) {
        this.setState({name: e.target.value})
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
            this.setState({formValid: true});
        }
      }
      handleMessageChange = function(e) {
        this.setState({message: e.target.value})
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
            this.setState({formValid: true});
        }
      }

    render() {
        return (
            <div className={classes.Contact} id="contact">
                <div className={classes.ContactContent}>
                    <h2 className={classes.ContactHeader}>Contact Us</h2>
                    <div className={classes.ContactMain}>
                        <form className={classes.ContactForm}>
                            <input type="text" className={classes.ContactInput} placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameChange(e)}/>
                            <input type="email" className={classes.ContactInput} placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/>
                            <input type="text" className={classes.ContactMessage} placeholder="Message" value={this.state.message} onChange={(e) => this.handleMessageChange(e)}/>
                            <input type="submit" value="Send" className={classes.ContactButton} />
                        </form>
                        <img className={classes.ContactImg} src={contactPlaceholder} alt="cinnamon rolls" />
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;