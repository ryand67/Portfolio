import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a className="footerLink" href="https://github.com/ryand67" target="_blank">
                <i class="fab fa-github fa-2x"></i>
            </a>
            <a className="footerLink" href="open.spotify.com/artist/0FARTTlpzuvZOT6mf2hSc4?si=PyUmcw0_QsaskTTEr87Olg" target="_blank">
                <i class="fab fa-spotify fa-2x"></i>
            </a>
            <a className="footerLink" href="https://www.instagram.com/ryan_devenney67/" target="_blank">
                <i class="fab fa-instagram fa-2x"></i>
            </a>
        </footer>
    )
}

export default Footer;