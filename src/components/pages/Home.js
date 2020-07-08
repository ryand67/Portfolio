import React from 'react';
import './home.css';
import Navbar from '../Navbar'
import Hero from '../HomeHero';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home;