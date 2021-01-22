import React from 'react'
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerIcons}>
                <a><i className={`${styles.footerIcon} fab fa-github`}></i></a>
                <a><i className={`${styles.footerIcon} fab fa-linkedin asdf`}></i></a>
                <a><i className={`${styles.footerIcon} fab fa-instagram`}></i></a>
                <a><i className={`${styles.footerIcon} fas fa-envelope-square`}></i></a>
            </section>
        </footer>
    )
}
