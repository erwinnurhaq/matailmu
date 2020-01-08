import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import Slider from "react-slick";
import { TimelineLite } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import { withRouter } from 'react-router-dom';

//for fix gsap bug
const C = CSSPlugin;

function Home(props) {

    const [selected, setSelected] = useState(0)
    const imgDesc = ['batch1.png', 'batch2.png', 'batch3.png']
    const testimonials = [
        {
            name: 'Abhi (9th Grade)',
            role: 'Student',
            testi: `"Saya sudah les sejak kelas 4 SD dan saya merasa senang sekali belajar dengan kakak guru Mata Ilmu karena tidak membosankan dan saya mudah untuk memahami pelajaran yang disampaikan. Terima Kasih Mata Ilmu…"`,
            img: 'profile-blank-invert.png'
        },
        {
            name: 'Hezkia Rumondang',
            role: 'Teacher',
            testi: `"Menjadi seorang guru di Mata Ilmu membuat saya belajar banyak tentang Pendidikan, terutama metode belajar yang disukai anak-anak. Temanteman guru juga sangat terbuka untuk saling berkolaborasi sehingga kemampuan mengajar saya dapat meningkat…"`,
            img: 'profile-blank-invert.png'
        }
    ];

    const settings = {
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const desc = () => {
        switch (selected) {
            case 0:
                return (
                    <div className='descText'>
                        <h1>We Create an Ecosystem of Education<br />LIKE NO OTHERS</h1>
                        <p>A big collaboration of teachers, parents, and schools to create better ecosystem of education that no longer hurts the students and weaken their own potential to be what they want.<br /><b>We believe that every child is unique.</b></p>
                    </div>
                )
            case 1:
                return (
                    <div className='descText'>
                        <h1>Learning with FUN :)</h1>
                        <p>Everything can be learned easily with fun learning media and methods. Studens also can explore about what they learn with fun activities so they <b>can enjoy learning.</b></p>
                    </div>
                )
            case 2:
                return (
                    <div className='descText'>
                        <h1>21st Century Ready!</h1>
                        <p>With the training in our <b>Teacher Incubator</b>, teachers can help students to learn and acquire the <b>21st Century Skills</b> which is really important for their future.</p>
                    </div>
                )
            default:
                return null
        }
    }

    const testiRender = () => testimonials.map((testimonial, idx) => {
        return (
            <div className="testiItem" key={idx}>
                <div className="testiText">
                    <h3>{testimonial.name} | {testimonial.role}</h3>
                    <p>{testimonial.testi}</p>
                </div>
                <div className="testiImage">
                    <img className="imgProfile" src={require(`../img/${testimonial.img}`)} alt={`img${idx}`} />
                </div>
            </div>
        )
    })

    let leftSide = useRef(null);
    let rightSide = useRef(null);


    useEffect(() => {

        let showDesc = setInterval(() => {
            setSelected(selected => selected === imgDesc.length - 1 ? 0 : selected + 1);
        }, 5000);

        document.title = 'Home - Mata Ilmu Official Website';

        const tl = new TimelineLite({ paused: true });
        tl.from(leftSide, 0.6, {
            delay: 0.6,
            x: '-25%',
            opacity: 0
        }).from(rightSide, 0.6, {
            scale: 0.5,
            opacity: 0
        });
        tl.play();

        return () => {
            clearInterval(showDesc)
        };
    }, [leftSide, imgDesc.length])

    return (
        <div className="homeContainer">
            <div className="leftSide" ref={el => leftSide = el}>
                <img className="heroImg" src={require('../img/img2.jpg')} alt="hero" />
                <div className="heroContainer">
                    <div className="heroText">
                        <h1>Education<br />to the Next Level</h1>
                        <p>Learning Journey for the Education 4.0</p>
                    </div>
                    <div className="heroBtnContainer">
                        <Button className="btnJoin">JOIN US!</Button>
                        <Button className="btnLearn" onClick={() => props.history.push('/services')}>LEARN MORE...</Button>
                    </div>
                </div>
            </div>
            <div className="rightSide" ref={el => rightSide = el}>
                <div className="contentDesc">
                    <div className="imgDescContainer">
                        {imgDesc.map((img, idx) => (
                            <img
                                key={idx}
                                id={idx}
                                src={require(`../img/${img}`)}
                                alt={`img${idx}`}
                                className={`imgDesc ${selected === idx ? 'active' : ''}`}
                                onClick={() => setSelected(idx)}
                            />
                        ))}
                    </div>
                    <div className="descContainer">
                        {desc()}
                    </div>
                </div>
                <div className="testiContainer">
                    <div className="testiTitle">
                        <MessageIcon />
                        <p>Testimonials:</p>
                    </div>
                    <Slider {...settings}>
                        {testiRender()}
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default withRouter(Home)
