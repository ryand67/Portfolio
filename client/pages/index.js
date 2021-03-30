import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer';
import NavHeader from '../components/NavHeader/NavHeader';
import MobileNav from '../components/MobileNav/MobileNav';
import MobileFooter from '../components/MobileFooter/MobileFooter';

export default function Home() {

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      })
    })

  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Devenney || Full Stack Developer</title>
        <link rel="icon" href='faviconNew.png' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
      </Head>

      {windowWidth > 650 ? <NavHeader /> : <MobileNav />}
      <main className={styles.homeMain}>
        <h1 className={styles.mainHeader}>Ryan Devenney</h1>
        <div className={styles.subHeadInfo}>
          <h2 className={styles.subHeader}>Full-Stack Web Developer located in Charlotte, NC looking to make your next project a reality.</h2>
          <h2 className={styles.subHeader}>Check out my past work <em><a href="/work" className={styles.mainLink}>here</a></em>.</h2>
        </div>
      </main>

      {windowWidth > 800 ? <Footer /> : <MobileFooter />}
    </div>
  )
}
