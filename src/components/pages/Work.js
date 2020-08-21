import React from 'react';
import WorkCard from '../WorkCard'
import './work.css';
import work1 from './innovationScreengrab.jpg';
import work2 from './squawkrPicture.png';
import work3 from './weatherScreenShot.png';

const Work = () => {
    return (
        <main className="workPage">
            <h1 className="workTitle">Work</h1>
            <div className="workGallery">
                <WorkCard imgSrc={work1} gitHub="https://github.com/JRivera-31/Innovation-Auto-Repair" deployed="https://innovation-auto-repair.vercel.app/" alt="Innovation Auto Parts Screenshot" desc="An app for an auto repair company in Texas that allows customers to book appointments, and for the owners to manage appointments, and dates available."/>
                <WorkCard imgSrc={work2} gitHub="https://github.com/ryand67/Squawkr" deployed="https://squawkr-uncc.herokuapp.com/" alt="Squawkr Screenshot" desc="A simple message board/social media platform for people to share ideas with each other and their friends" />
                <WorkCard imgSrc={work3} gitHub="https://github.com/ryand67/Weather-Dashboard" deployed="https://ryand67.github.io/Weather-Dashboard/" alt="Weather Dashboard Link" desc="An app that allows users to check the current weather of any city and receive a 5 day forecast." />
            </div>
        </main>
    )
}

export default Work;