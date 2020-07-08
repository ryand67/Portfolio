import React from 'react';
import WorkCard from '../WorkCard'
import './work.css';
import work1 from './trailheadsScreenShot.jpg';
import work2 from './squawkrPicture.png';
import work3 from './weatherScreenShot.png';

const Work = () => {
    return (
        <main className="workPage">
            <h1 className="workTitle">Work</h1>
            <div className="workGallery">
                <WorkCard imgSrc={work1} gitHub="https://github.com/lu-gflores/TrailHeads" deployed="https://lu-gflores.github.io/TrailHeads/" alt="Trailheads Screenshot"/>
                <WorkCard imgSrc={work2} gitHub="https://github.com/ryand67/Squawkr" deployed="https://squawkr-uncc.herokuapp.com/" alt="Squawkr Screenshot" />
                <WorkCard imgSrc={work3} gitHub="https://github.com/ryand67/Weather-Dashboard" deployed="https://ryand67.github.io/Weather-Dashboard/" alt="Weather Dashboard Link"/>
            </div>
        </main>
    )
}

export default Work;