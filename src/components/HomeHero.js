import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <main className="hero">
            <h1 className="heroLogo">Ryan Devenney</h1>
            <p className="heroDesc">Full-stack dev and musician</p>
            <hr/>
            <Button text="About Me" href="/about" />
        </main>
    )
}

export default Hero;