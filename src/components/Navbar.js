import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <p className="logo">RD</p>
            <ul className="nav-list">
                <li className="nav-item"><a href="">About</a></li>
                <li className="nav-item"><a href="">Work</a></li>
                <li className="nav-item"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;