import React from 'react';
import './workcard.css'

const WorkCard = (props) => {
    return (
        <div className="workCard">
            <a href={props.deployed} target="_blank"><img src={props.imgSrc} alt={props.alt} className="workImg"/></a>
            <h3 className="workTitles">{props.title}</h3>
            <p className="workDesc">{props.desc}</p>
            <a href={props.gitHub} target="_blank" className="gitHubLink">GitHub Repo</a>
        </div>
    )
}

export default WorkCard;