import React from 'react';
import '../App.css';

import HomeHero from '../Components/homeHero';
import HomeContent from '../Components/homeContent';
import Footer from '../Components/footer';

function Home() {
    return (
        <div className="home-container">
            <img className="hero-img" src={require('../img/img2.jpg')}></img>
            <HomeHero />
            <HomeContent />
            <Footer />
        </div>
    );
}

export default Home;
