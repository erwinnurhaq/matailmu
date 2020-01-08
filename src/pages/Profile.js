import React, { useEffect } from 'react'

function Profile() {

    useEffect(() => {
        document.title = 'Profile - Mata Ilmu Official Website';
    }, [])

    return (
        <div className="profileContainer">
            <div className="imgBgContainer">
                <img className="imgBg" src={require('../img/img2.jpg')} alt="imgBg" />
            </div>
            <h1>Profile Page</h1>
        </div>
    )
}

export default Profile
