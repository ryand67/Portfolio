import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <p className="logo"><Link to="/">RD</Link></p>
            <ul className="nav-list">
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/work">Work</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;