import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Nav from '../components/NavHeader/NavHeader';
import Footer from '../components/Footer/Footer';
import styles from '../styles/contact.module.css';
import emailjs from 'emailjs-com';
import MobileNav from '../components/MobileNav/MobileNav';

export default function contact() {

    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
          })
        })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_mplbg7h', 'template_vr8wd83', e.target, 'user_8JdlKgob6SqIadG5ELa2O')
            .then((result) => {
          console.log(result.text);
            }, (error) => {
          console.log(error.text);
      });

        e.target.reset();
    }

    return (
        <>
            <Head>
                <title>Ryan Devenney || Full Stack Developer</title>
                <link rel="icon" href='faviconNew.png' />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
            </Head>
            {windowWidth > 650 ? <Nav /> : <MobileNav />}
            {/* asdf */}
            <main className={styles.contact}>
                <h1 className={styles.contactHeader}>Contact</h1>
                <form onSubmit={(e) => handleFormSubmit(e)} className={styles.contactForm} action="">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="John Doe" name="name"/>
                    <label htmlFor="formEmail">Email Address:</label>
                    <input id="formEmail" name="formEmail" type="email" placeholder="example@website.com"/>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Put your message here."></textarea>
                    <button type="submit">Submit</button>
                </form>
                <Footer />
            </main>
        </>
    )
}
