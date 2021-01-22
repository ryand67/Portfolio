import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Devenney</title>
        <link rel="icon" href='Favicon.png' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
      </Head>

      <main className={styles.homeMain}>
        <h1 className={styles.mainHeader}>Ryan Devenney</h1>
        <h2 className={styles.subHeader}>Full Stack Developer</h2>
      </main>

      <Footer />
    </div>
  )
}
