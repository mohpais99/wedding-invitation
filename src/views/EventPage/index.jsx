import React from 'react';
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';
import std from 'assets/img/wedding.png';
// import ring from 'assets/img/logo/rings.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

function EventPage(props) {
    return (
        <div id="datepage" className="section d-flex align-items-center banner--img" style={{backgroundImage: `url(${props.width > 769 ? bg13 : bgresponsive})`}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-2 text-center">
                        <div className="card std">
                            <div className="card-body d-flex justify-content-center">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="row justify-content-center">
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="cover">
                                                    <img className="w-100" src={std} alt="std"/>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-sm-12 mb-2 prolog-event">
                                                <span className="font-dekko">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengundang Bapak/Ibu/Saudara(i) untuk menghadiri Resepsi Pernikahan kami</span>
                                            </div>
                                            <div className="col-12 font-dekko">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="card bg-transparent" style={{borderRadius: "10px"}}>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className="row information-event">
                                                                            <div className="col-2 py-1">
                                                                                <FontAwesomeIcon icon={["fa", "calendar"]} />
                                                                            </div>
                                                                            <div className="col-10 d-flex align-items-center text-left py-1">
                                                                                <span>Sunday, 4th of April, 2021</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="row information-event">
                                                                            <div className="col-2 py-1">
                                                                                <FontAwesomeIcon icon={["fa", "clock"]} />
                                                                            </div>
                                                                            <div className="col-10 d-flex align-items-center text-left py-1">
                                                                                <span>11 a.m. until 8 p.m.</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="row information-event">
                                                                            <div className="col-2 py-1">
                                                                                <FontAwesomeIcon icon={["fa", "map-marker"]} />
                                                                            </div>
                                                                            <div className="col-10 d-flex align-items-center text-left py-1">
                                                                                <span>Komplek Pakuwon (Jl. Jelambar Timur RT 014 RW 009 Kel. Jelambar Baru Kec Grogol Petamburan)</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 mt-2">
                                                        <div className="card bg-transparent" style={{borderRadius: "10px"}}>
                                                            <div className="card-body">
                                                                <h1>Di sini map</h1>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
