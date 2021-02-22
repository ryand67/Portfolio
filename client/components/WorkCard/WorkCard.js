import React from 'react';
import styles from './WorkCard.module.css';

export default function WorkCard({ props, setList, handleSelect }) {

    let techList = '';
    props.tech.map(tech => {
        techList += `#${tech}  `
    })

    const handleTechClick = (tech) => {
        console.log(tech);
        setList(tech);
        handleSelect({
            target: {
                value: tech
            }
        })
    }

    return (
        <div className={styles.workCard}>
            <h1 className={styles.workCardHeader}><strong><a href={props.live} target="_blank">{props.name}</a></strong></h1>
            <h3>{props.desc}</h3>
            <div className={styles.techListDiv}>
                {props.tech.map((tech, i) => {
                    return <h3 className={styles.techList} key={i} onClick={() => handleTechClick(tech)}>#{tech}</h3>
                })}
            </div>
            {/* <h3 className={styles.techList}>{techList}</h3> */}
            <h4 className={styles.links}><a href={props.live} target="_blank">Live Site</a>  |  <a href={props.gitLink} target="_blank">Github Repo</a></h4>
        </div>
    )
}
