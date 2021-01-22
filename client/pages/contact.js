import React from 'react'
import Nav from '../components/NavHeader/NavHeader';
import Footer from '../components/Footer/Footer';
import styles from '../styles/contact.module.css';
import emailjs from 'emailjs-com';

export default function contact() {

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
            <Nav />
            <main className={styles.contact}>
                <h1 className={styles.contactHeader}>Contact</h1>
                <form onSubmit={(e) => handleFormSubmit(e)} className={styles.contactForm} action="">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="John Doe" name="name"/>
                    <label htmlFor="formEmail">Email Address:</label>
                    <input id="formEmail" name="formEmail" type="text" placeholder="example@website.com"/>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Put your message here."></textarea>
                    <button type="submit">Submit</button>
                </form>
                <Footer />
            </main>
        </>
    )
}
