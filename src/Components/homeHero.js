import React, { useContext } from 'react';
import '../styles/App.scss';
import { GlobalContext } from '../GlobalContext';


function HomeHero() {

    const { invertBgValue } = useContext(GlobalContext);
    const [invertBg] = invertBgValue;

    return (
        <div className="hero-container">
            <div>
                <h1 className={invertBg ? 'h1-fade' : ''}>Education<br />to the Next Level</h1>
                <p className={invertBg ? 'p-fade' : ''}>Learning journey for the education 4.0</p>
                <div className={`btn-hero-container ${invertBg ? 'b-fade' : ''}`}>
                    <button className="btn-hero">Join Us</button>
                    <button className="btn-hero btn-2">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
