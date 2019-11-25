import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className="header">
            <div className="btn-login-container">
                <a className="btn-login" href="#">LOGIN</a>
            </div>
            <nav>
                <img src={require('../img/logo/logo_matailmu_orange.png')} alt="logo"></img>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                    <Link to="/profile"><li>Profile</li></Link>
                    <Link to="/career"><li>Career</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
