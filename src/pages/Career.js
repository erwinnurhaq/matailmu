import React, { useEffect } from 'react'

function Career() {

    useEffect(() => {
        document.title = 'Career - Mata Ilmu Official Website';
    }, [])

    return (
        <div className="careerContainer">
            <div className="imgBgContainer">
                <img className="imgBg" src={require('../img/img2.jpg')} alt="imgBg" />
            </div>
            <h1>Career Page</h1>
        </div>
    )
}

export default Career
