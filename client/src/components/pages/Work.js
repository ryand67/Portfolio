import React from 'react';
import WorkCard from '../WorkCard'
import './work.css';
import work1 from './innovationScreengrab.jpg';
import work2 from './squawkrPicture.png';
import work3 from './weatherScreenShot.png';
import work4 from './tsg-preview-screenshot.jpg';

const Work = () => {
    return (
        <main className="workPage">
            <h1 className="workTitle">Work</h1>
            <div className="workGallery">
                <WorkCard imgSrc={work1} gitHub="https://github.com/JRivera-31/Innovation-Auto-Repair" deployed="https://innovation-auto-repair.vercel.app/" title="Innovation Auto Repair" alt="Innovation Auto Repair Screenshot" desc="An app for an auto repair company in Texas that allows customers to book appointments, and allows the owners to manage appointments, and available dates."/>
                <WorkCard imgSrc={work2} gitHub="https://github.com/ryand67/Squawkr" deployed="https://squawkr-uncc.herokuapp.com/" alt="Squawkr Screenshot" title="Squawkr" desc="A simple message board/social media platform for people to share ideas with others." />
            </div>
            <div className="workGallery workGalleryBottom">
                <WorkCard imgSrc={work3} gitHub="https://github.com/ryand67/Weather-Dashboard" deployed="https://ryand67.github.io/Weather-Dashboard/" title="Weather Dashboard" alt="Weather Dashboard Link" desc="An app that allows users to check the current weather of any city and receive a 5 day forecast." />
                <WorkCard imgSrc={work4} deployed="http://tsg-live-preview.herokuapp.com/" title="TravelSalesGroup" gitHub="https://github.com/ryand67/TSG-Site" desc="A site to promote the services of the travel agency TravelSalesGroup." />
            </div>
        </main>
    )
}

export default Work;