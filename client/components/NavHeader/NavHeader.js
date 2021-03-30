import React, { useState, useEffect } from 'react'
import styles from './NavHeader.module.css';

export default function NavHeader() {

    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(window.location.pathname);
    }, [])

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={path === '/' ? `${styles.navListItem}` : `${styles.disabled}`}><a href='/'>home</a></li>
                <li className={path === '/work' ? `${styles.navListItem}` : `${styles.disabled}`}><a href="/work">work</a></li>
                <li className={styles.disabled}><a href='ryanDevenneyResume.pdf' target="_blank">resume</a></li>
                <li className={path === '/contact' ? `${styles.navListItem}` : `${styles.disabled}`}><a href="/contact">contact</a></li>
            </ul>
        </nav>
    )
}
