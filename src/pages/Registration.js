import React, { useEffect } from 'react'

function Registration() {

    useEffect(() => {
        document.title = 'Registration - Mata Ilmu Official Website';
    }, [])

    return (
        <div className="registrationContainer">
            <div className="imgBgContainer">
                <img className="imgBg" src={require('../img/img2.jpg')} alt="imgBg" />
            </div>
            <h1>Registration Page</h1>
        </div>
    )
}

export default Registration
