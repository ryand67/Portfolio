import React from 'react';
import './workcard.css'

const WorkCard = (props) => {
    return (
        <div className="workCard">
            <a href={props.deployed} target="_blank"><img src={props.imgSrc} alt={props.alt} className="workImg"/></a>
            <a href={props.gitHub} target="_blank" className="gitHubLink">GitHub Repo</a>
        </div>
    )
}

export default WorkCard;