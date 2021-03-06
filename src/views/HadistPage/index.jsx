import React from 'react';
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';
import me from 'assets/img/main.png';
import hadist from 'assets/img/hadist.png';
import './style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// AIzaSyBP6FUaqoXduXsB-0OLpameYPIocrxdQfk
function HadistPage(props) {
    return (
        <div id="hadistpage" className="section d-flex align-items-center banner--img" style={{backgroundImage: `url(${props.width > 769 ? bg13 : bgresponsive})`}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-1 text-center">
                        <div className="card std" style={{minHeight: "35vh"}}>
                            <div className="card-body d-flex justify-content-center">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="card " style={{borderRadius: "10px"}}>
                                            <div className="card-body bg-transparent">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <h4 className="font-dekko font-size-18 mb-0">
                                                            Bismillahirrahmanirrahim
                                                        </h4>
                                                        <img className="w-100" src={hadist} alt="bingkai"/>
                                                        <h4 className="font-dekko font-size-14 mb-0" style={{marginTop: "-12px"}}>
                                                            Dan segala sesuatu Kami ciptakan berpasang-pasangan sehingga kamu akan mengingat kebesaran Allah. - (Q.S Adz-Dzariyat: 49)
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center mb-2">
                                        <div className="row justify-content-center">
                                            <div className="col-md-8 col-sm-12">
                                                <p className="font-dekko description mb-0">Ya Allah semoga ridho-Mu tercurah mengiringi putra-putri kami</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                        <div className="profil">
                                                            <h1 className="font-almendra">Ani Riyani, S.E.</h1>
                                                            <span className="font-dekko">Putri pertama dari Bapak Riyadi & Ibu Farikha</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                                                        {/* <img className="w-80" src={me} alt="bingkai"/> */}
                                                        <LazyLoadImage
                                                            src={me} 
                                                            alt="bingkai"
                                                            className="w-80" />
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                        <div className="profil">
                                                            <h1 className="font-almendra">Muh Faiz, S.Kom.</h1>
                                                            <span className="font-dekko">Putra kedua dari Bpk H. Mursid & Ibu Hj. Rumiyati</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center d-none d-md-block">
                                        <h2 className="font-alex-brush">Please join us ...</h2>
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

export default HadistPage
