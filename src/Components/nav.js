import React, { useContext } from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';

function Nav() {

    const { invertBgValue } = useContext(GlobalContext);
    const [invertBg] = invertBgValue;


    return (
        <div className={`header ${invertBg ? 'header-invert' : ''}`}>
            <div className="btn-login-container">
                <a className="btn-login" href="#">LOGIN</a>
            </div>
            <nav className={invertBg ? 'nav-invert' : ''}>
                <img src={require(invertBg ? '../img/logo/logo_matailmu_dark.png' : '../img/logo/logo_matailmu_orange.png')} alt="logo"></img>
                <ul>
                    <Link to="/"><li className={invertBg ? 'li-invert' : ''}>Home</li></Link>
                    <Link to="/services"><li className={invertBg ? 'li-invert' : ''}>Services</li></Link>
                    <Link to="/profile"><li className={invertBg ? 'li-invert' : ''}>Profile</li></Link>
                    <Link to="/career"><li className={invertBg ? 'li-invert' : ''}>Career</li></Link>
                    <Link to="/contact"><li className={invertBg ? 'li-invert' : ''}>Contact Us</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
