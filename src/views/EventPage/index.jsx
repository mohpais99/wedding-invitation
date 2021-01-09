import React from 'react';
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';
import std from 'assets/img/wedding.png';
// import ring from 'assets/img/logo/rings.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

function EventPage(props) {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8056733164512!2d106.7773509148814!3d-6.156775595542422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6366b322531%3A0x639b56a812a8acd5!2sMasjid%20Raya%20Al%20Amanah!5e0!3m2!1sid!2sid!4v1610193354459!5m2!1sid!2sid'
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
                                                <div className="row justify-content-center">
                                                    <div className="col-md-8 col-sm-12">
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
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-12">
                                                        <div className="card bg-transparent" style={{border: "none"}}>
                                                            <iframe 
                                                                className="w-100"
                                                                title="location"
                                                                height="300"
                                                                src={map} 
                                                                frameBorder="0"
                                                                allowFullScreen="" 
                                                                aria-hidden="false" 
                                                                tabIndex="0"></iframe>
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
