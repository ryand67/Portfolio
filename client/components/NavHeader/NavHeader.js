import React from 'react'
import styles from './NavHeader.module.css';

export default function NavHeader() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navListItem}><a href='/'>home</a></li>
                <li className={styles.navListItem}><a href='/about'>about</a></li>
                <li className={styles.navListItem}><a href="/work">work</a></li>
                <li className={styles.navListItem}><a href="/contact">contact</a></li>
            </ul>
        </nav>
    )
}
