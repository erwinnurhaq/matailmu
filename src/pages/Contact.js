import React, { useEffect } from 'react'

function Contact() {

    useEffect(() => {
        document.title = 'Contact - Mata Ilmu Official Website';
    }, [])

    return (
        <div className="contactContainer">
            <div className="imgBgContainer">
                <img className="imgBg" src={require('../img/img2.jpg')} alt="imgBg" />
            </div>
            <h1>Contact Page</h1>
        </div>
    )
}

export default Contact
