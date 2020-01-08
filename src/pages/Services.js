import React, { useEffect, useRef } from 'react';
import ServicesCard from '../components/ServicesCard';

function Services() {

    const services = [
        {
            name: 'Private Learning',
            desc: 'Experience the one-on-one learning with our teacher for more efficient and direct learning. This program services is available from elementary level to senior high level (1st grade to 12th grade student).',
            img: 'img4.jpg',
            buttons: [
                { label: 'Join Us', direction: '/registration', style: 'btnOne' },
                { label: 'Get Price List', direction: '/contact', style: 'btnTwo' }
            ]
        },
        {
            name: 'Small Class Learning',
            desc: 'Learning with friends in the small group to level up collaboration and communication skills. Preparing for the Industry 4.0.',
            img: 'img1.jpg',
            buttons: [
                { label: 'Join Us', direction: '/registration', style: 'btnOne' },
                { label: 'Get Price List', direction: '/contact', style: 'btnTwo' }
            ]
        },
        {
            name: 'Education Consultation',
            desc: 'For the parents who want to discuss and get advice for their children\'s education journey, by mapping children\'s talents, potentials and interests for the better future generations.',
            img: 'img3.jpg',
            buttons: [
                { label: 'Call Us', direction: '/contact', style: 'btnOne' },
            ]
        },
        {
            name: 'Teacher Incubator',
            desc: 'For the teachers and schools who want to improve the skills and competencies of teaching and collaborate with others to make a better education system.',
            img: 'img5_edit.jpg',
            buttons: [
                { label: 'Join Us', direction: '/registration', style: 'btnOne' },
                { label: 'Learn More', direction: '/contact', style: 'btnTwo' }
            ]
        },
    ]

    useEffect(() => {
        document.title = 'Services - Mata Ilmu Official Website';
    }, [])

    return (
        <div className="servicesContainer">
            <div className="imgBgContainer">
                <img className="imgBg" src={require('../img/img2.jpg')} alt="imgBg" />
            </div>
            <div className="content">
                <div className="servicesWrapper">
                    {services.map((service, idx) => (
                        <ServicesCard key={idx} service={service} idx={idx} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
