import React from 'react';
import { Card, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function ServicesCard(props) {

    const { service, idx } = props;

    return (
        <Card className='serviceCard' id={idx}>
            <div className="cardWrapper">
                <div className="imgContainer">
                    <img src={require(`../img/${service.img}`)} alt={service.name} />
                </div>
                <div className='descContainer'>
                    <h1>{service.name}</h1>
                    <p>{service.desc}</p>
                    <div className="btnContainer">
                        {service.buttons.map((btn, btnidx) => (
                            <Button
                                key={btnidx}
                                className={btn.style}
                                onClick={() => props.history.push(`${btn.direction}`)}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default withRouter(ServicesCard)