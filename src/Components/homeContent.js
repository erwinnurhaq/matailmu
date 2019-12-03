import React from 'react';
import '../styles/App.scss';

function HomeContent() {
    return (
        <div className="home-content">
            <div className="content-wrapper1">
                <div className="content-text">
                    <h1>We create an Ecosystem of Education<br />like no others!</h1>
                    <p>A big collaboration of teachers, parents and schools to create better ecosystem of education that no longer hurts the students and weaken their own potential to be what they want, because we believe that every child is unique.</p>
                </div>
                <div className="content-img">
                    <img src={require('../img/batch1.png')} alt="trinity" />
                </div>
            </div>
            <div className="content-wrapper2">
                <div className="content-img">
                    <img src={require('../img/batch2.png')} alt="trinity" />
                </div>
                <div className="content-text">
                    <h1>Learning with fun!</h1>
                    <p>Everything can be learned easily with fun learning media and methods. Students also can explore about what they learn with fun activities so they can enjoy learing.</p>
                </div>
            </div>
            <div className="content-wrapper1">
                <div className="content-text">
                    <h1>21st Century Ready!</h1>
                    <p>With the training in our <b>Teacher Incubator</b>, teachers can help students to learn and acquire the 21st Century skills which is really important for their future life</p>
                </div>
                <div className="content-img">
                    <img src={require('../img/batch3.png')} alt="trinity" />
                </div>
            </div>
        </div>
    );
}

export default HomeContent;
