import React from 'react';
import flower from "assets/img/flower.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './style.css';

const Farame = () => {
    return (
        <>
            <LazyLoadImage
                src={flower} 
                alt="flower"
                effect="blur"
                className="frame position-absolute frame-top-left" />
            <LazyLoadImage
                src={flower} 
                alt="flower"
                effect="blur"
                className="frame position-absolute frame-top-right" />
            <LazyLoadImage
                src={flower} 
                alt="flower"
                effect="blur"
                className="frame position-absolute frame-bottom-left" />
            <LazyLoadImage
                src={flower} 
                alt="flower"
                effect="blur"
                className="frame position-absolute frame-bottom-right" />
            {/* <img className="frame position-absolute frame-top-left" src={flower} alt="flower" />
            <img className="frame position-absolute frame-top-right" src={flower} alt="flower" />
            <img className="frame position-absolute frame-bottom-left" src={flower} alt="flower" />
            <img className="frame position-absolute frame-bottom-right" src={flower} alt="flower" /> */}
        </>
    );
};

export default Farame;