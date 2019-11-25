import React from 'react';
import '../App.css';

function HomeHero() {
    return (
        <div className="hero-container">
            <h1>Education<br />to the Next Level</h1>
            <p>Learning journey for the education 4.0</p>
            <div className="btn-hero-container">
                <button className="btn-hero">Join Us</button>
                <button className="btn-hero btn-2">Learn More</button>
            </div>
        </div>
    );
}

export default HomeHero;
