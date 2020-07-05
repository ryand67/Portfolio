import React from 'react';
import profilePic from '../assets/profilePic.jpg';

const Bio = () => {
    return (
        <section className="bioMain">
            <h1 className="about-heading">About Me</h1>
            <section className="bioSect">
                <img src={profilePic} alt="Profile picture" className="profilePic"/>
                <div className="aboutText">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quam sit repudiandae vitae a iusto laudantium accusamus ipsa adipisci nobis cupiditate possimus explicabo atque delectus veniam laboriosam autem laborum, aliquam in temporibus ratione perferendis ex unde? Iste quidem eveniet dignissimos nesciunt a, dolores delectus officiis ullam quae dolorum aperiam blanditiis?</p>
                </div>
            </section>
        </section>
    )
}

export default Bio;