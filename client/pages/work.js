import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Nav from '../components/NavHeader/NavHeader';
import Footer from '../components/Footer/Footer';
import styles from '../styles/work.module.css';
import WorkCard from '../components/WorkCard/WorkCard';
import MobileNav from '../components/MobileNav/MobileNav';
import MobileFooter from '../components/MobileFooter/MobileFooter';

export default function work() {

    const [windowWidth, setWindowWidth] = useState();
    
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    })
    
    const workData = [{
        name: 'TravelSalesGroup',
        desc: 'A site to promote the services of the travel agency TravelSalesGroup.',
        tech: [ 'HTML', 'CSS', 'React', 'Vercel', 'emailJS'],
        gitLink: 'https://github.com/ryand67/TSG-Site',
        live: 'https://www.travelsalesgroup.com'
    }, {
        name: 'Squawkr',
        desc: 'A simple message board/social media platform for people to share ideas with others.',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.js', 'Express', 'MongoDB', 'Heroku'],
        gitLink: 'https://github.com/ryand67/Squawkr',
        live: 'https://squawkr-uncc.herokuapp.com/'
    }, {
        name: 'Innovation Auto Repair',
        desc: "An app for an auto repair company in Texas that allows customers to bookappointments, and allows the owners to manage appointments, and available dates.",
        tech: ['HTML', 'CSS', 'Next.js', 'MongoDB', 'Node.js', 'Express'],
        gitLink: 'https://github.com/JRivera-31/Innovation-Auto-Repair',
        live: 'https://innovation-auto-repair.vercel.app/'
    }, {
        name: 'TrailHeads',
        desc: 'A simple app that allows users to find hiking trails near them.',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Hiking Project API', 'Tailwind'],
        gitLink: 'https://github.com/lu-gflores/TrailHeads',
        live: 'https://lu-gflores.github.io/TrailHeads/'
    }]

    const [workState, setWorkState] = useState(workData);

    const handleSelect = (e) => {
        if(e.target.value === 'All') {
            setWorkState(workData);
            return;
        }

        const tempWorkData = workData.map(item => {
            if(item.tech.includes(e.target.value)) {
                return item
            }
        })

        const filtered = tempWorkData.filter(item => {
            return item !== undefined
        })

        setWorkState(filtered);
    }
    
    return (
        <div>
            <Head>
                <title>Ryan Devenney || Full Stack Developer</title>
                <link rel="icon" href='faviconNew.png' />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
            </Head>

            {windowWidth > 650 ? <Nav /> : <MobileNav />}

            <div className={styles.workPage}>
                <h1 className={styles.workHeader}>Work:</h1>
                <select onChange={(e) => handleSelect(e)} className={styles.selectBox} name="tech" id="techSelect">
                    <option className={styles.workOptions} value="All">All</option>
                    <option className={styles.workOptions} value="JavaScript">JavaScript</option>
                    <option className={styles.workOptions} value="jQuery">jQuery</option>
                    <option className={styles.workOptions} value="HTML">HTML</option>
                    <option className={styles.workOptions} value="CSS">CSS</option>
                    <option className={styles.workOptions} value="React">React</option>
                    <option className={styles.workOptions} value="Next.js">Next.js</option>
                    <option className={styles.workOptions} value="MongoDB">MongoDB</option>
                    <option className={styles.workOptions} value="Node.js">Node.js</option>
                    <option className={styles.workOptions} value="Heroku">Heroku</option>
                    <option className={styles.workOptions} value="Vercel">Vercel</option>
                </select>
                {workState.map((info, i) => {
                    return <WorkCard props={info} key={i} />
                })}
            </div>

            {windowWidth > 800 ? <Footer /> : <MobileFooter />}
        </div>
    )
}
