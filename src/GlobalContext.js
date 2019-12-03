import React, { createContext, useEffect, useState } from 'react';
import './styles/App.scss';


export const GlobalContext = createContext();

export const GlobalState = props => {

    const [invertBg, setInvertBg] = useState(false)

    const bgChanger = () => {
        if (window.scrollY > window.innerHeight / 4) {
            setInvertBg(true);
        } else {
            setInvertBg(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', bgChanger)
    }, [])

    return (
        <GlobalContext.Provider value={{ invertBgValue: [invertBg, setInvertBg] }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

