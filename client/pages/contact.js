import React from 'react'
import Nav from '../components/NavHeader/NavHeader';
import Footer from '../components/Footer/Footer';
import styles from '../styles/contact.module.css';

export default function contact() {
    return (
        <>
            <Nav />
            <main className={styles.contact}>
                <h1 className={styles.contactHeader}>Contact</h1>
                <Footer />
            </main>
        </>
    )
}
