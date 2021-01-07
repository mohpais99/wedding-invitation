import React from 'react'
import './style.css';
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';

function DatePage(props) {
    return (
        <div id="datepage" className="section d-flex align-items-center banner--img" style={{backgroundImage: `url(${props.width > 769 ? bg13 : bgresponsive})`}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-2 text-center">
                        <div className="card std">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="row py-4">
                                            <div className="col-12 title text-center mb-4">
                                                <h4 className="mb-0">Save the Date</h4>
                                                <span>for the wedding of</span>
                                            </div>
                                            <div className="col 12">
                                                <div className="row subtitle">
                                                    <div className="col-12 font-almendra">
                                                        <h1>Ani Riyani, S.E.</h1>
                                                    </div>
                                                    <div className="col-12 font-alex-brush">
                                                        <h2>and</h2>
                                                    </div>
                                                    <div className="col-12 font-almendra">
                                                        <h1>Muh Faiz, S.Kom.</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 footer font-bad-script text-center mt-5">
                                                <h4>April 04, 2020</h4>
                                                <h4>at Komplek Pakuwon (Jl. Jelambar Timur RT 014 RW 009 Kel. Jelambar Baru Kec Grogol Petamburan</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePage
