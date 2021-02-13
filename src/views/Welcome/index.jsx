import React, { useEffect, useRef, useState } from 'react';
import banner from 'assets/img/Ani&Faiz.png';
import bg3 from 'assets/img/bg-3.jpeg';
import mask from 'assets/img/protocol/002-face-mask.svg';
import wash from 'assets/img/protocol/001-washing-hands.svg';
import healthy from 'assets/img/protocol/003-healthy.svg';
import distance from 'assets/img/protocol/004-social-distancing.svg';
import { Frame } from 'components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Welcome() {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    let interval = useRef();

    const startTimer = () => {
        const countdown = new Date('Maret 07, 2021 11:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdown - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / (1000) )

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000) 
    }

    useEffect(() => {
        startTimer();
        let cur = interval.current
        return () => {
            clearInterval(cur)
        }
    })
    return (
        <div id="welcome" className="section d-flex align-items-center justify-content-center banner--img" style={{backgroundImage: `url(${bg3})`}}>
            <div className="backdrop"></div>
            <Frame />
            <div className="container" style={{zIndex: '2'}}>
                <div className="row">
                    <div className="col-md-6 mx-auto py-2 text-center top-min">
                        <div className="row">
                            <div className="col-12">
                                <LazyLoadImage
                                    src={banner} 
                                    alt="banner-logo"
                                    className="banner" />
                            </div>
                            <div className="col-12 mt-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="countdown border p-3 border-right-none border-left-radius">
                                            <h6>{timerDays}</h6>
                                            <span>Day</span>
                                        </div>
                                        <div className="countdown border p-3">
                                            <h6>{timerHours}</h6>
                                            <span>Hour</span>
                                        </div>
                                        <div className="countdown border p-3">
                                            <h6>{timerMinutes}</h6>
                                            <span>Minutes</span>
                                        </div>
                                        <div className="countdown border p-3 border-left-none border-right-radius">
                                            <h6>{timerSeconds}</h6>
                                            <span>Second</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4 font-dekko ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-center text-white">
                                            <h6>Mohon Ikuti Protokol Kesehatan dengan:</h6>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center text-white px-4">
                                        <div className="col d-block text-center">
                                            <div className="img w-100">
                                                <img src={mask} alt="pro" width="35"/>
                                            </div>
                                            <span style={{fontSize: "10px"}}>Pakai Masker</span>
                                        </div>
                                        <div className="col d-block text-center">
                                            <div className="img w-100">
                                                <img src={distance} alt="pro" width="35"/>
                                            </div>
                                            <span style={{fontSize: "10px"}}>Jaga Jarak</span>
                                        </div>
                                        <div className="col d-block text-center">
                                            <div className="img w-100">
                                                <img src={wash} alt="pro" width="35"/>
                                            </div>
                                            <span style={{fontSize: "10px"}}>Cuci Tangan</span>
                                        </div>
                                        <div className="col d-block text-center">
                                            <div className="img w-100">
                                                <img src={healthy} alt="pro" width="35"/>
                                            </div>
                                            <span style={{fontSize: "10px"}}>Kondisi Fit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="text-white position-absolute scroll" to="#">
                <b></b>
                Scroll
            </Link>
        </div>
    )
}

export default Welcome
