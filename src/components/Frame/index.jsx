import React from 'react';
import flower from "assets/img/flower.png";
import './style.css';

const Farame = () => {
    return (
        <>
            <img className="frame position-absolute frame-top-left" src={flower} alt="flower" />
            <img className="frame position-absolute frame-top-right" src={flower} alt="flower" />
            <img className="frame position-absolute frame-bottom-left" src={flower} alt="flower" />
            <img className="frame position-absolute frame-bottom-right" src={flower} alt="flower" />
        </>
    );
};

export default Farame;