import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a className="footerLink" href="https://github.com/ryand67" target="_blank">
                <i className="fab click-icon fa-github fa-2x"></i>
            </a>
            <a className="footerLink" href="https://www.instagram.com/ryan_devenney67/" target="_blank">
                <i className="fab click-icon fa-instagram fa-2x"></i>
            </a>
            <a className="footerLink" href="https://www.linkedin.com/in/ryandevenney67/" target="_blank">
                <i className="fab click-icon fa-linkedin fa-2x"></i>
            </a>
            <a className="footerLink" href="http:// open.spotify.com/artist/0FARTTlpzuvZOT6mf2hSc4?si=PyUmcw0_QsaskTTEr87Olg" target="_blank">
                <i className="fab click-icon fa-spotify fa-2x"></i>
            </a>
        </footer>
    )
}

export default Footer;