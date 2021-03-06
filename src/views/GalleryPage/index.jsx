import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import bg13 from 'assets/img/bg-13.jpeg';
import bgresponsive from 'assets/img/cc.jpeg';
import gallery4 from 'assets/img/gallery-4.jpg';
import gallery5 from 'assets/img/gallery-5.jpg';
import gallery6 from 'assets/img/gallery-6.jpg';

function GalleryPage(props) {
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
                                            <div className="col-md-8 col-sm-12 mb-2 prolog-event">
                                                <h2 className="font-alex-brush">Our Gallery</h2>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="card bg-transparent" style={{borderRadius: "10px"}}>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-md-4 mb-1 gallery col-sm-12">
                                                                        <LazyLoadImage
                                                                            src={gallery4} 
                                                                            alt="gallery-4"
                                                                            effect="blur"
                                                                            className="w-100" />
                                                                        {/* <img className="w-100" src={gallery4} alt="gallery-1" /> */}
                                                                    </div>
                                                                    <div className="col-md-4 mb-1 gallery col-sm-12">
                                                                        <LazyLoadImage
                                                                            src={gallery5} 
                                                                            alt="gallery-5"
                                                                            effect="blur"
                                                                            className="w-100" />
                                                                        {/* <img className="w-100" src={gallery5} alt="gallery-1" /> */}
                                                                    </div>
                                                                    <div className="col-md-4 mb-1 gallery col-sm-12">
                                                                        <LazyLoadImage
                                                                            src={gallery6} 
                                                                            alt="gallery-6"
                                                                            effect="blur"
                                                                            className="w-100" />
                                                                        {/* <img className="w-100" src={gallery6} alt="gallery-1" /> */}
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
            </div>
        </div>
    )
}

export default GalleryPage
