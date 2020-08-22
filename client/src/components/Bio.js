import React from 'react';
import profilePic from '../assets/ryanPicture.jpg';
// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon, InlineIcon } from '@iconify/react';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import mysqltwoIcon from '@iconify/icons-whh/mysqltwo';


const Bio = () => {
    return (
        <section className="bioMain">
            <h1 className="about-heading">About Me</h1>
            <section className="bioSect">
                <img src={profilePic} alt="Profile picture" className="profilePic"/>
                <div className="aboutText">
                    <p>I'm Ryan, full-stack developer from Charlotte, NC.</p>
                </div>
            </section>
            <div className="tech-div">
                <h2 className="tech-list-header">Technologies:</h2>
                <div className="tech-list-div">
                    <ul className="tech-list">
                        <li className="tech-list-li"><i className="fab fa-html5 tech-list-item"></i></li>
                        <li className="tech-list-li"><i className="fab fa-css3-alt tech-list-item"></i></li>
                        <li className="tech-list-li"><i class="fab fa-js tech-list-item"></i></li>
                    </ul>
                    <ul className="tech-list">
                        <li className="tech-list-li"><i className="fab fa-node-js tech-list-item"></i></li>
                        <li className="tech-list-li"><i className="fab fa-react tech-list-item"></i></li>
                        <Icon icon={mongodbIcon} className="tech-list-item" />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Bio;