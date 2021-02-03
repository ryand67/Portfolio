import React from 'react'
import styles from './mobileFooter.module.css'

export default function MobileFooter() {
    return (
        <div className={styles.footer}>
            <section className={styles.footerIcons}>
                <a href="https://github.com/ryand67" target="_blank"><i className={`${styles.footerIcon} fab fa-github`}></i></a>
                <a href="https://www.linkedin.com/in/ryandevenney67/" target="_blank"><i className={`${styles.footerIcon} fab fa-linkedin asdf`}></i></a>
                {/* <a href="https://www.instagram.com/ryan_devenney67/" target="_blank"><i className={`${styles.footerIcon} fab fa-instagram`}></i></a> */}
                <a href="/contact"><i className={`${styles.footerIcon} fas fa-envelope-square`}></i></a>
            </section>
        </div>
    )
}
