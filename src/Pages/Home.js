import React, { useContext } from 'react';
import '../styles/App.scss';

import { GlobalContext } from '../GlobalContext';
import HomeHero from '../Components/homeHero';
import HomeContent from '../Components/homeContent';
import Footer from '../Components/footer';

function Home() {

    const { invertBgValue } = useContext(GlobalContext);
    const [invertBg] = invertBgValue;

    return (
        <div className="home-container">
            <img className={`hero-img ${invertBg ? 'blur' : ''}`} src={require('../img/img2.jpg')} alt="hero-img"></img>
            <HomeHero />
            <HomeContent />
            <Footer />
        </div>
    );
}

export default Home;
