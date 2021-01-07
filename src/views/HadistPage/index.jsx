import React from 'react';
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';
// import border from 'assets/img/border-img.png';
// import me from 'assets/img/me.png';
import me from 'assets/img/avatar.png';
import hadist from 'assets/img/hadist.png';
import './style.css';

function HadistPage(props) {
    return (
        <div id="hadistpage" className="section d-flex align-items-center banner--img" style={{backgroundImage: `url(${props.width > 769 ? bg13 : bgresponsive})`}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto py-1 text-center">
                        <div className="card std" style={{minHeight: "35vh"}}>
                            <div className="card-body d-flex justify-content-center">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <img className="w-100" src={hadist} alt="bingkai"/>
                                                <h4 className="font-dekko font-size-18" style={{marginTop: "-15px"}}>And all things We created in pairs so that you would remember the greatness of Allah. - (Q.S Adz-Dzariyat: 49)</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="row py-4">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                        <div className="profil">
                                                            <h1 className="font-almendra">Ani Riyani</h1>
                                                            <span className="font-dekko">Putri pertama dari Bapak Riyadi & Ibu Farikha</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                                                        <img className="w-100" src={me} alt="bingkai"/>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                        <div className="profil">
                                                            <h1 className="font-almendra">Moh Pais</h1>
                                                            <span className="font-dekko">Putri pertama dari Bapak Riyadi & Ibu Farikha</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center d-none d-lg-block">
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
