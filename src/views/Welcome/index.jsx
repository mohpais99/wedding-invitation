import React from 'react';
import banner from 'assets/img/badge_fix.png';
import bg3 from 'assets/img/bg-3.jpeg';
import { Frame } from 'components';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div id="welcome" className="section d-flex align-items-center banner--img" style={{backgroundImage: `url(${bg3})`}}>
            <div className="backdrop"></div>
            <Frame />
            <div className="container" style={{zIndex: '2'}}>
                <div className="row">
                    <div className="col-md-6 mx-auto py-2 text-center top-min">
                        <div className="row">
                            <div className="col-12">
                                <img className="banner" src={banner} alt="banner-logo" />
                            </div>
                            <div className="col-12 mt-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="countdown border p-3 border-right-none border-left-radius">
                                            <h6>04</h6>
                                            <span>Day</span>
                                        </div>
                                        <div className="countdown border p-3">
                                            <h6>20</h6>
                                            <span>Hour</span>
                                        </div>
                                        <div className="countdown border p-3 border-left-none border-right-radius">
                                            <h6>46</h6>
                                            <span>Minute</span>
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
