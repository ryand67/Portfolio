import React from 'react';
import Navbar from '../Navbar';
import './contact.css';

const Contact = () => {
    return (
        <div className="contactPage">
            <h1 className="contactTitle">CONTACT</h1>
            <ul>
                <li className="contactLi">
                    <a href="mailto:rwdevenney@gmail.com">
                        <i class="fas contact-icon fa-envelope-square fa-2x"></i>
                        rwdevenney@gmail.com
                    </a>
                </li>

                <li className="contactLi">
                    <a href="https://www.linkedin.com/in/ryandevenney67/" target="_blank">
                        <i className="fab contact-icon fa-linkedin fa-2x"></i>
                            @ryandevenney67
                    </a>
                </li>

                <li className="contactLi">
                    <a href="https://github.com/ryand67" target="_blank">
                        <i className="fab contact-icon fa-github fa-2x"></i>@ryand67
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;