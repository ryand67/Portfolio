import React from 'react'
import styles from './NavHeader.module.css';

export default function NavHeader() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navListItem}>home</li>
                <li className={styles.navListItem}>about</li>
                <li className={styles.navListItem}>work</li>
                <li className={styles.navListItem}>contact</li>
            </ul>
        </nav>
    )
}
