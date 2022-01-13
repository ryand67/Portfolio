import React from 'react'
import styles from './mobilenav.module.css'

export default function MobileNav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navListItem}><a href='/'>home</a></li>
                <li className={styles.navListItem}><a href="/work">work</a></li>
                <li className={styles.navListItem}><a href='ryanDevenneyResumeCharter.pdf' target="_blank">resume</a></li>
                <li className={styles.navListItem}><a href="/contact">contact</a></li>
            </ul>
        </nav>
    )
}
