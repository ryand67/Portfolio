import React from 'react'
import Head from 'next/head'
import styles from '../styles/about.module.css';
import Nav from '../components/NavHeader/NavHeader'

export default function about() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ryan Devenney || Full Stack Developer</title>
                <link rel="icon" href='faviconNew.png' />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
            </Head>

            <Nav />
        </div>
    )
}
